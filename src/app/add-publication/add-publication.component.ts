import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from '../Model/publication';
import { PublicationService } from '../Services/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  message: string;
  selectedFile: File;
  paramurl:any;
  pub:Publication;
title:string = '';
text:string = '';
  constructor(private httpClient:HttpClient,
    private activatedroute: ActivatedRoute,
    private service : PublicationService,
    private route:Router
    ) { }

  ngOnInit(): void {
    
  }
  public onFileChanged(event) {
    
        //Select File
    
        this.selectedFile = event.target.files[0];
    
      }
    
    
      //Gets called when the user clicks on submit to upload the image
    
      onUpload() {
    
        console.log(this.selectedFile);
    
        //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    
        const uploadImageData = new FormData();
    
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    
        //Make a call to the Spring Boot Application to save the image
    
        this.httpClient.post('http://localhost:8080/pi/upload', uploadImageData, { observe: 'response' })
    
          .subscribe((response) => {
    
            if (response.status === 200) {
    
              this.message = 'Image uploaded successfully';
    
            } else {
    
              this.message = 'Image not uploaded successfully';
    
            }
    
          }
          );
    
      }
    
      addpub(){
        let publ = new Publication;
        this.paramurl = this.activatedroute.snapshot.params.id;
        publ.title = this.title;
        publ.publication_txt = this.text;
        this.service.AddPublication(publ,this.paramurl).subscribe(()=>
          this.route.navigate(['Showpublication'])
        );

      }
}
