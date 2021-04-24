import { Component, OnInit } from '@angular/core';
import { ChangepasswdService } from "../../services/changepasswd.service";
import {NewPassword  } from "../../models/new-password";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-shopsettings',
  templateUrl: './shopsettings.component.html',
  styleUrls: ['./shopsettings.component.scss']
})
export class ShopsettingsComponent implements OnInit {

  newPass : NewPassword;
  constructor(private changeser :  ChangepasswdService) {  this.newPass =new NewPassword(); }

  ngOnInit(): void {
  }
  public opened = true;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
   // if(f.valid){
      this.changeser.changePassword(this.newPass).subscribe(res=>{
        console.log(res);
        this.dataSaved = true;
        this.close();
        
      });
    }
     /* else {
        alert("error  happened");
        this.close();
      }
  }*/
}
