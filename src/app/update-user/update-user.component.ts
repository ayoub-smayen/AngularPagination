import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Euser } from '../models/euser';
import { EuserserviceService } from '../services/euserservice.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  euser:Euser=null;
  message:string;
  private selectedFile2;
  imageUrl2: any;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private euserserviceService: EuserserviceService,private http:HttpClient) { }

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    this.euserserviceService.getById(id)
      .subscribe(
        data => {
          const fg = data; 
          this.euser = data;
          console.log(data);
          //alert(data);
        },
        error => {
          console.log(error);
        });
  }


  updateTutorial1(): void {
    console.table(this.euser);
    this.euserserviceService.addUser(this.euser)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The form was updated successfully!';
          //alert(this.message);
          this.router.navigate(['/euser']);
        },
        error => {
          console.log(error);
        });
  }

  updateTutorial()
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
