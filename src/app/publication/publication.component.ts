import { Component, OnInit } from '@angular/core';
import { Publication } from '../Model/publication';
import { PublicationService } from '../Services/publication.service';
import { Router } from '@angular/router'
import { User } from '../Model/user';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { switchMap,mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  nbre:number;
  pub!:Publication[];
  retrievedImage: any;
  user:User[];
  p:number = 1;
  users:number[] = [1,2,3,4];
  selectedFile: File;
  name:string = '';
  title:string = '';
text:string = '';
  constructor(private httpClient:HttpClient,
    private service : PublicationService,
    private router: Router) { 
      
   
    }

  ngOnInit(): void {
    this.service.getpubNumber().subscribe((data:number)=>this.nbre=data);
    this.service.getLatestpub().subscribe((data:Publication[]) =>this.pub = data);
    this.service.getUser().subscribe((res:User[])=> this.user = res);
  }
  go():void {
    this.router.navigate(['addpub']);
  }
  
  selectChangeHandler (event: any) {
    //update the ui
    if(event.target.value == 1){
      this.service.getpubALaUne().subscribe((data:Publication[]) =>this.pub = data);
    }
    if(event.target.value == 0){
      this.service.getLatestpub().subscribe((data:Publication[]) =>this.pub = data);
    }
  }
  public onFileChanged(event) {
    
    //Select File

    this.selectedFile = event.target.files[0];
    const uploadImageData = new FormData();

    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image

    this.httpClient.post('http://localhost:8080/pi/upload', uploadImageData, { observe: 'response' })

      .subscribe();
  }
  addpub(){
    let publ = new Publication;
    
    publ.title = this.title;
    publ.publication_txt = this.text;
    this.service.AddPublication(publ,this.users[Math.floor(Math.random()*this.user.length)]).subscribe(()=>
    this.service.getLatestpub().subscribe((data:Publication[]) =>this.pub = data)
    );

  }
  addlike(id){
    this.service.Addlikepublication(id).subscribe(
      ()=>
    this.service.getLatestpub().subscribe((data:Publication[]) =>this.pub = data)
    );
  }
  adddislike(id){
    this.service.Adddislikepublication(id).subscribe(
      ()=>
    this.service.getLatestpub().subscribe((data:Publication[]) =>this.pub = data)
    );
  }
}
