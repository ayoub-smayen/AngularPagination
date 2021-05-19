import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryManService } from '../delivery-man.service';
import { DeliveryMan } from '../deliverymanmodel';

@Component({
  selector: 'app-update-deliv',
  templateUrl: './update-deliv.component.html',
  styleUrls: ['./update-deliv.component.css']
})
export class UpdateDelivComponent implements OnInit {
paramUrl: any;
deliv: DeliveryMan;
  name: string;
  lastName: string;
  photo: any;
  disponibility: any;
  email: string;
  salaire: number;
  transport: string;
  workLoad: any= 0;
  phone: any;
  facebook: any;
  
  constructor(private httpClient: HttpClient,private route: Router, private activatedRoute: ActivatedRoute, private service: DeliveryManService) { }

  ngOnInit(): void {
this.paramUrl=this.activatedRoute.snapshot.params.id;
  }

public updateD(){
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
    let resp= this.service.updateDeliveryMan(this.paramUrl, deliv);
    resp.subscribe();
    
      this.route.navigateByUrl('Listdeliveryman');

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
