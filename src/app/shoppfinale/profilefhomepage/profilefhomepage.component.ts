import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-profilefhomepage',
  templateUrl: './profilefhomepage.component.html',
  styleUrls: ['./profilefhomepage.component.scss']
})
export class ProfilefhomepageComponent implements OnInit {

  constructor(private  authService :  AuthService, private router :Router,
    private prodSer : ProductService,private httpclient :  HttpClient,
    
    ) { }
  isLoggedIn: boolean;
  profs: any;
  ngOnInit(): void {

    this.getPrifile();
  }
  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      //alert(res);
      this.profs=res;
    })
  }

  
}
