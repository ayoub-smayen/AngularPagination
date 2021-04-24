import { Component, OnInit } from '@angular/core';
import { CommentService } from "../.././services/comment.service";
import { Lcomment } from "../.././models/lcomment";
@Component({
  selector: 'app-commentforum',
  templateUrl: './commentforum.component.html',
  styleUrls: ['./commentforum.component.scss']
})
export class CommentforumComponent implements OnInit {


  comments : Comment[] ;
  constructor(private commentService  :  CommentService) {this.comments=[]; }

  ngOnInit(): void {
    this.getAllComments();
  }

  getAllComments(){

    this.commentService.getPolls().subscribe(result =>{
  this.comments =result;
    })
    
  }

}
