import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Euser } from 'src/app/models/euser';
import { EuserService } from 'src/app/services/euser.service';
@Component({
  selector: 'app-euser',
  templateUrl: './euser.component.html',
  styleUrls: ['./euser.component.scss']
})
export class EuserComponent implements OnInit {

  private selectedFile2;
  imageUrl2: any;
  euser:Euser;
  message:any;
  
    constructor(
      //private formBuilder: FormBuilder,
      private route: ActivatedRoute, 
        private router: Router, 
          private euserserviceService: EuserService ,private http: HttpClient) { this.euser = new Euser(); }
  
          ngOnInit(): void {
     
          }
      
       /* registerNow(){
          let resp=this.euserserviceService.addUser(this.euser).subscribe((data)=>this.message=data);
      }*/
  
  add()
  {
    
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile2, this.selectedFile2.name);
  
  
    this.http.post('http://localhost:8091/api/euser/uploadimage', uploadData, { observe: 'response' })
    .subscribe((response) => {
      console.log(response);
  
      if (response.status === 200) {
        this.euserserviceService.addUser(this.euser).subscribe(
          
          (profile) => {
            console.table(this.euser);
            //this.bookAddedEvent.emit();
        
  window.location.reload();
            this.router.navigate(['home']);
          }
        );
        console.log('Image uploaded successfully');
      } else {
        console.log('Image not uploaded successfully');
      }
    }
    );
  
  }
  public onFileChanged2(event) {
    console.log(event);
    this.selectedFile2 = event.target.files[0];
  
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imageUrl2 = reader.result;
    };
  
      }
  

}
