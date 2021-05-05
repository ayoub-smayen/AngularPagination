import { Comment } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
user:number[] = [1,2,3];
com:string ='';
timediff:any = new Date();
dates:string;
id:any;
date: String;
hide = true;

@ViewChild('cocomment') comm: ElementRef;

play = false;
playsound =  false;

  constructor(private activatedroute: ActivatedRoute,
    private service: PublicationService,
    private route: Router,
    private renderer: Renderer2
    ) { 
      
    }

  ngOnInit(): void {
    
    this.paramurl = this.activatedroute.snapshot.params.id;
    
    this.service.getpubdetails(this.paramurl).subscribe((data:Publication)=> {this.pub = data;
      this.service.getCommentsById(this.paramurl).subscribe((com:Comments[])=> this.comments = com);
    
    });
    
    
    
  }
  
  AddComment(){
    let comment = new Comments();
    comment.comment_field = this.com;
    this.service.AddComments(this.user[Math.floor(Math.random()*this.user.length)],this.paramurl,comment).subscribe(res=>{  
      
        console.log(res);
        this.ngOnInit();
      
      /*const p: HTMLElement = this.renderer.createElement('li');
      p.innerHTML = `
      <a class="pull-left" href="#">
       <img class="roundedImage" [src]="\'data:image/jpeg;base64,\'+c.user.img" alt="avatar"></a>
      <div class="comment-body">
          <div class="comment-heading">
              <h4 class="user">{{c.user.user_Lastname}}</h4>
              <h5 class="time">{{c.createdAt | amTimeAgo:true}}</h5>
          </div>
          <p>`+this.com+`</p>
          <div class="stats">
              <a href="#" class="btn btn-default stat-item" (click)="addlikecomments(c.id)" onclick="window.location.reload()">
                  <i class="fa fa-thumbs-up icon"></i>{{c.like_count}}       
              </a>
              <a href="#" class="btn btn-default stat-item" (click)="deleteComment(c.id)">
                  <i class="fas fa-times-circle"></i>
              </a>
              
          </div>
      </div>
     
  `;
  this.renderer.appendChild(this.comm.nativeElement,p);*/
    
    
    
    });
    this.playsound = ! this.playsound;
    
    this.com = '';
   

    
  }
  addlike(){
    this.service.Addlikepublication(this.paramurl).subscribe();
    this.play = !this.play;
    this.ngOnInit();
  }
  adddislike(){
    this.service.Adddislikepublication(this.paramurl).subscribe();
    window.location.reload();
    this.ngOnInit();
  }
  addlikecomments(id){
    this.service.Addlikecomments(id).subscribe();
    this.ngOnInit();
  }
  deleteComment(id){
    this.service.deleteComments(id).subscribe();
    this.ngOnInit();
  }

hidecomment(){
  console.log(this.hide);
  this.hide = !this.hide;
}





  showEmojiPicker = false;
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
