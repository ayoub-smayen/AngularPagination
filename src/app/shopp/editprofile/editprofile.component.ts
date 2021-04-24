import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {AuthService  } from "../.././services/auth.service";
import {Profile  } from "../.././models/profile";
import {  Router} from "@angular/router";
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  private selectedFile2;
 // imgURL: any;
  imageUrl2: any;

 // retreiveImg :any;
  Img :any;
  profile :Profile;
  constructor(private http:HttpClient,private profileSer : AuthService,private router: Router) {this.profile = new Profile(); }

  ngOnInit(): void {
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

   editprofile(){
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile2, this.selectedFile2.name);


    this.http.post('http://localhost:8091/api1/user/uploadprofimg', uploadData, { observe: 'response' })
    .subscribe((response) => {
      console.log(response);

      if (response.status === 200) {
        this.profileSer.editProfile(this.profile).subscribe(
          
          (profile) => {
            console.table(this.profile);
            //this.bookAddedEvent.emit();
            //window.location.reload();
            this.router.navigate(['book']);
          }
        );
        console.log('Image uploaded successfully');
      } else {
        console.log('Image not uploaded successfully');
      }
    }
    );

//  });
 }


   }  

//}
