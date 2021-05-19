import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { MailtrapService } from 'src/app/service/mailtrap.service';
import { AuthService } from 'src/app/services/auth.service';

class Favourite{
  data : '';

  products : Product[];
}
@Component({
  selector: 'app-navbarthomepage',
  templateUrl: './navbarthomepage.component.html',
  styleUrls: ['./navbarthomepage.component.scss']
})
export class NavbarthomepageComponent implements OnInit {
  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();
  constructor( private http : HttpClient,private  authService :  AuthService, private router :Router,private mailtr :  MailtrapService) {
this.notifications=0;
    this.username='guest';

    this.lng=0;
    this.lat=0;
   }
   private sendMessage(msgText: string):void {
    this.message.next(msgText);
}
public onChange(target: any) {
  this.msg.next(target.value);
  target.value = '';
}

public onMsgReceive(msg: string) { }

public msg: Subject<any> = new Subject();
public msgArray: Observable<Array<any>> = new Observable<Array<any>>();
   public opened = true;
    public dataSaved = false;
  
    public close() {
      this.opened = false;
    }
  
    public open() {
      this.opened = true;
    }
  
    public submit() {
      this.dataSaved = true;
      this.close();
    }
  username: string;
  lng : number ;
  lat : number;


  URL_OP2 = "http://localhost:8091/api/favourite";
  //constructor() { }   application/json

  favourites : Favourite =new Favourite(); 
  getFavourite(){
  
    this.getAllPubblicities().subscribe((res)=>{

  this.favourites =res;


   this.products = this.favourites.products ;

   //alert(this.products);
/*
  this.favourites.products.forEach(el=>{
    alert(el.productname);
  })*/
//alert(res);
  
  console.log( this.favourites);
},
 
  err=>{
      console.error(err);
      this.favourites =err;
  }
   )

}
   products : Product[];
  getAllPubblicities():Observable<Favourite>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      }),
      
    };

    return this.http.get<Favourite>(this.URL_OP2 ,httpOptions);
  }

  notifications : number  ;
 
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position=>{
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();
    });


     this.getFavourite();
this.notifications  = this.favourites.products.length;
   
   

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(pos){
       


      const latlon = pos.coords.latitude + "," + pos.coords.longitude;

      localStorage.setItem('lat', pos.coords.latitude.toString() );
      localStorage.setItem('long', pos.coords.longitude.toString() );

      alert(pos.coords.longitude);

      var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyAf4g2qKKbzBQr1r54BNdXjk_OtR1Ra8B0";
    
      document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    })
  }else alert("browser not  support ")

  this.lat = Number.parseFloat ( localStorage.getItem('lat'));
this.lng =  Number.parseFloat ( localStorage.getItem('long'));

    
    
  }
  logout() {
    this.authService.logout();
    this.authService.loginSubject.next(null);
    this.router.navigate(['login']);
  }
  isLoggedIn: boolean;
  profs: any;

  

  sendmail(f: NgForm){
    if(f.valid){
      this.mailtr.postMail(f.value).subscribe(res=>{
        console.log(res);
      })
    }
  }
}
