import { Component, OnInit } from '@angular/core';
import { Euser } from '../models/euser';
import { EuserserviceService } from '../services/euserservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-euser',
  templateUrl: './euser.component.html',
  styleUrls: ['./euser.component.css']
})
export class EuserComponent implements OnInit {
 /* form: FormGroup;
  id: any;
  isAddMode: boolean;
  loading = false;
  submitted = false*/
  private selectedFile2;
imageUrl2: any;
euser:Euser;
message:any;

  constructor(
    //private formBuilder: FormBuilder,
    private route: ActivatedRoute, 
      private router: Router, 
        private euserserviceService: EuserserviceService ,private http: HttpClient) { this.euser = new Euser(); }

        ngOnInit(): void {
   
        }
    
        Save(f:NgForm)
{

console.log(f.value);
}
     

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

    