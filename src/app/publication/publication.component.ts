import { Component, OnInit } from '@angular/core';
import { Publication } from '../Model/publication';
import { PublicationService } from '../Services/publication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  nbre:number;
  pub!:Publication[];
  retrievedImage: any;
  
  base64Data: any;
  constructor(private service : PublicationService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getpubNumber().subscribe((data:number)=>this.nbre=data);
    this.service.getpub().subscribe((data:Publication[]) =>this.pub = data);
  }
  go():void {
    this.router.navigate(['addpub']);
  }

}