import { Component, OnInit } from '@angular/core';
import {Publication  } from "../../models/publication";
import { PublicationService } from "../../services/publication.service";
import {  NgForm} from "@angular/forms";
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  
 pub: Publication = {
  id: null,
  publication_txt:null,
  user: null
};

  constructor(private http:PublicationService) { this.pub=new Publication();}


  ngOnInit(): void {
  }
  addPublication(n1:NgForm){
    if(n1.valid){
      this.http.addPublication(n1.value).subscribe(res=>{
        console.log(res);
      })
    }
  }

}
