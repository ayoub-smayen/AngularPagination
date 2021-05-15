import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../Address';
import { DeliveryManService } from '../delivery-man.service';
import { DeliveryMan } from '../deliverymanmodel';
//import { Shop } from '../Shop';
import { HttpClient,HttpHeaders } from '@angular/common/http';
/*declare var latitude: any;
declare var longitude: any;*/
@Component({
  selector: 'app-add-deliv',
  templateUrl: './add-deliv.component.html',
  styleUrls: ['./add-deliv.component.css']
})
export class AddDelivComponent  {
  
deliv: DeliveryMan;
  name: string;
  lastName: string;
  photo: any;
  disponibility: any;
  email: string;
  salaire: number;
  transport: string;
  workLoad: any= 0;
 /* latitude: any;
  longitude: any;*/
  phone: any;
  facebook: any;
  
  constructor(private _service:DeliveryManService,private router: Router,private httpClient: HttpClient ) { }

  private selectedFile2: any;
  imageUrl2: any;

  

  
  public adddeliv()
{
  let deliv=new DeliveryMan;
  deliv.deliveryMan_Name=this.name;
    deliv.deliveryMan_lastName=this.lastName;
   
    deliv.dispoDeliv=this.disponibility;
    deliv.email=this.email;
    deliv.salaire=this.salaire;
 
    deliv.transport=this.transport;
    deliv.workLoad=this.workLoad;
    deliv.phoneNumber=this.phone;
    deliv.facebook=this.facebook;
    let resp= this._service.addDeliveryMan(deliv);
    resp.subscribe();
    
      this.router.navigateByUrl('Listdeliveryman');
  }

  public onFileChanged(event) {
    
    //Select File

    this.selectedFile = event.target.files[0];
    this.onUpload();

  }

selectedFile: File;



onUpload() {
    
  console.log(this.selectedFile);

  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.

  const uploadImageData = new FormData();

  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

  //Make a call to the Spring Boot Application to save the image
this.httpClient.post('http://localhost:8091/api/upload', uploadImageData, { observe: 'response' })

    .subscribe((response) => {

      if (response.status === 200) {

        console.log('Image uploaded successfully');

      } else {

        console.log('Image not uploaded successfully');

      }

    }
    );

}


}
