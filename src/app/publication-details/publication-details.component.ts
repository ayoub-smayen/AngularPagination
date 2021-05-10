import { Comment } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { Comments } from '../Model/Comments';
import { Publication } from '../Model/publication';
import { User } from '../Model/user';
import { PublicationService } from '../Services/publication.service';

@Component({
  selector: 'app-publication-details',
  templateUrl: './publication-details.component.html',
  styleUrls: ['./publication-details.component.css']
})
export class PublicationDetailsComponent implements OnInit {
paramurl:any;
pub:Publication;
comments:Comments[]; 
user:number[] = [1,2,3,4];
com:string ='';
timediff:any = new Date();
dates:string;
id:any;
date: String;
hide = true;
com1 :string='' ;
hideupdate = false;
@ViewChildren("boxes") private boxes: QueryList<ElementRef>;
@ViewChild('cocomment') comm: ElementRef;

play = false;
playsound =  false;

  constructor(private activatedroute: ActivatedRoute,
    private service: PublicationService,
    private route: Router,
    private renderer: Renderer2
    ) { 
      this.paramurl = this.activatedroute.snapshot.params.id;
    }

  ngOnInit(): void {
    
    
    
    this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
    this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.comments = com);
    
    
  }
  
  AddComment(){
    let comment = new Comments();
    comment.comment_field = this.com;
    this.service.AddComments(this.user[Math.floor(Math.random()*this.user.length)],this.paramurl,comment).subscribe( res=>

    {this.playsound = ! this.playsound;
    
    
    alert("comment added successfully");
    this.com = '';
    this.paramurl = this.activatedroute.snapshot.params.id;
    
    this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
  this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.comments = com);
   

},
error => {alert("can not add a comment which contain forbidden word ");
this.com = '';}


);
  }
  addlike(){
    this.service.Addlikepublication(this.paramurl).subscribe(res=>{
      this.play = !this.play;
      this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> {this.pub = data;
        this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.comments = com);
    
    });
    
    
  
  });}
    
  adddislike(){
    this.service.Adddislikepublication(this.paramurl).subscribe(res =>{this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
      this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.comments = com);});
    
  }
  addlikecomments(id){
    this.service.Addlikecomments(id).subscribe(res =>{this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
      this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.comments = com);});
    
  }
  deleteComment(id){
    this.service.deleteComments(id).subscribe(
      res =>{this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
        this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.comments = com);}
    );
    
  }

hidecomment(){
  console.log(this.hide);
  this.hide = !this.hide;
}
hideupdates(index,id){
  let nativeElement = this.boxes.toArray()[index].nativeElement;
  nativeElement.style.display =
    nativeElement.style.display === "none" || !nativeElement.style.display
      ? "table-cell"
      : "none";
      let updatedndex =  this.comments.findIndex(x => x.id == id);
      this.com1 = this.comments[updatedndex].comment_field;
}
updatecomment(id){
  let comment = new Comments();
   
   let updatedndex =  this.comments.findIndex(x => x.id == id);
   this.comments[updatedndex].comment_field = this.com1;
   comment = this.comments[updatedndex];
   console.log(comment);
    this.service.updatecomment(this.com1,id).subscribe();
    

}





  showEmojiPicker = false;
  showEmojiPickercomment = false;
  sets = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
  set = 'twitter';
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }
  toggleEmojiPickercomment() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event) {
    console.log(this.com)
    const { com } = this;
    console.log(com);
    console.log(`${event.emoji.native}`)
    const text = `${com}${event.emoji.native}`;

    this.com = text;
    // this.showEmojiPicker = false;
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }

}
