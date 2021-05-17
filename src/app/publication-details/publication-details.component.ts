import { HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { error, stringify } from '@angular/compiler/src/util';
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
  p:number = 1;
paramurl:any;
pub:Publication;
commentss:Comments[]; 
user:number[] = [1,2,3,4];
com:string ='';
timediff:any = new Date();
dates:string;
id:any;
date: String;
hide = true;
com1 :string='' ;
cc : string ='';
hideupdate = false;
@ViewChildren("boxes") private boxes: QueryList<ElementRef>;
@ViewChild('cocomment') comm: ElementRef;

play = false;
playsound =  false;

  constructor(private activatedroute: ActivatedRoute,
    private service: PublicationService,
    private route: Router,
    private renderer: Renderer2,
    private http : HttpClient
    ) { 
      this.paramurl = this.activatedroute.snapshot.params.id2;
    }

  ngOnInit(): void {
    
    
    
    this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
    this.http.get("http://localhost:8080/pi/RetrieveComments/"+this.paramurl).subscribe((commm:Comments[])=> this.commentss = commm);
    
    
  }
  
  AddComment(){
    let comment = new Comments();
    comment.comment_field = this.com;
    this.service.AddComments(this.user[Math.floor(Math.random()*this.user.length)],this.paramurl,comment).subscribe( res=>

    {this.playsound = ! this.playsound;
    
      this.showEmojiPicker = false;
    alert("comment added successfully");
    this.com = '';
    
    
    this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
  this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.commentss = com);
   

},
error => {alert("can not add a comment which contain forbidden word ");
this.com = '';}


);
  }
  addlike(){
    this.service.Addlikepublication(this.paramurl).subscribe(res=>{
      this.play = !this.play;
      this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> {this.pub = data;
        this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.commentss = com);
    
    });
    
    
  
  });}
    
  adddislike(){
    this.service.Adddislikepublication(this.paramurl).subscribe(res =>{this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
      this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.commentss = com);});
    
  }
  addlikecomments(id){
    this.service.Addlikecomments(id).subscribe(res =>{this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
      this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.commentss = com);});
    
  }
  deleteComment(id){
    this.service.deleteComments(id).subscribe(
      res =>{this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> this.pub = data);
        this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.commentss = com);}
    );
    
  }

hidecomment(){
  console.log(this.hide);
  this.hide = !this.hide;
}
hideupdates(index,id){
  let nativeElement = this.boxes.toArray()[index].nativeElement;
  nativeElement.style.visibility =
    nativeElement.style.visibility === "hidden" || !nativeElement.style.visibility
      ? "visible"
      : "hidden";
      let updatedndex =  this.commentss.findIndex(x => x.id == id);
      this.com1 = this.commentss[updatedndex].comment_field;
}
updatecomment(index,id){
  let comment = new Comments();
   
   let updatedndex =  this.commentss.findIndex(x => x.id == id);
   this.commentss[updatedndex].comment_field = this.com1;
   comment = this.commentss[updatedndex];
   console.log(comment);
    this.service.updatecomment(comment,id).subscribe(
      ()=>{
        this.showEmojiPickercomment = false;
    let nativeElement = this.boxes.toArray()[index].nativeElement;
  nativeElement.style.visibility =
    nativeElement.style.visibility === "hidden" || !nativeElement.style.visibility
      ? "visible"
      : "hidden";
      }
    );
    
    
    

}
deleteLastChar(){
  
  
  this.cc = this.com1.substring(0,this.com1.length - 2);
  this.com1 = this.cc;
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
    console.log(this.showEmojiPickercomment);
        this.showEmojiPickercomment = !this.showEmojiPickercomment;
  }

  addEmoji(event) {
    console.log(this.com)
    const { com } = this;
    console.log(com);
    console.log(`${event.emoji.native}`)
    const text = `${com}${event.emoji.native}`;

    this.com = text;
    //this.showEmojiPicker = false;
  }
  addEmoji1(event) {
    console.log(this.com1)
    const { com1 } = this;
    console.log(com1);
    console.log(`${event.emoji.native}`)
    const text = `${com1}${event.emoji.native}`;

    this.com1 = text;
    
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }
  onFocus1() {
    console.log('focus');
    this.showEmojiPickercomment = false;
  }
  onBlur1() {
    console.log('onblur')
  }

}
