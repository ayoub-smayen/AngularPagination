import { switchMap } from 'rxjs/operators';
import { AuthService } from '../.././services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BookService } from "../../services/book.service";
import { Book } from "../../models/book";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import {  NgForm} from "@angular/forms";
import { Profile } from 'src/app/models/profile';
import { MailtrapService } from "../../service/mailtrap.service";
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilterserService } from "./filterser.service";
import { NotificationService } from '@progress/kendo-angular-notification';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {



  searchProduct:any ; 

 filterFiled = '' ;
  filterResults$: Observable<Product[]> = null;
public filterprod:any = '';
term: string;
 dataLength(data: Product[]) {
  return data.length > 0 ? true : false;
}
  username: string;
  password: string;
  email: string;
  password2: string;
username2 :string;
  books : Book[];
  products :  Product[];
  isLoggedIn: boolean;
  profs: any;


   myproduct : string = '';
  coins : number;
  em = {

    firstName : '',
    lastName : '',
    emailAddress : ''


  };
  usert : User;
  constructor( private notificationService: NotificationService,private httpclient:HttpClient,private mailtr :  MailtrapService,private prodSer: ProductService,private bookserv : BookService,private authService: AuthService, private router: Router, private flashMessage: FlashMessagesService) {this.books = []; this.products=[]; }


  productToUpdate: Product;
  searcht(event){
   // event.preventDefault();
    //
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
          })
        };
    
    return this.httpclient.get<Product[]>(`http://localhost:8091/api/findproduct/${this.myproduct}` ).subscribe(res=>{
      this.products = res;
      console.log(res);
    
    });
    
         
      }
  changeStockValue(p) {
      this.productToUpdate = this.products.find(this.findProducts, [p.product_id]);
      console.log(this.productToUpdate);
      this.productToUpdate.quantity = this.productToUpdate.quantity - p.updatdstockvalue;

      this.httpclient.put("http://localhost:8091/api/updateprod/" + p.product_id + "/" +  p.updatdstockvalue , {} ).subscribe(res=>{
        console.log(res);

        this.getAllProducts();

      })
  }
  findProducts(p) {

    //console.log(this[0]);
    console.log(p.product_id == this[0]);
      return p.product_id == this[0];
  }
 



  getCurrentUser(){
     this.authService.getCuurentUser().subscribe(res=>{
       console.log(res);
       this.usert=res;
     });
  }
  showFlash() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To TheRichPost.com', { cssClass: 'custom-success', timeout: 1000 });
  }
  public show(): void {
    this.notificationService.show({
        content: 'you add some data ',
        cssClass: 'button-notification',
        animation: { type: 'slide', duration: 400 },
        position: { horizontal: 'center', vertical: 'bottom' },
        type: { style: 'success', icon: true },
        closable: true
    });
}

  addLikes(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/like/"+ id,{},httpOptions).subscribe(res=>{
        console.log(res);
        this.show();
        this.showFlash();
        this.getAllProducts();
      })

  }


   addViews(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/vues/"+ id,{},httpOptions).subscribe(res=>{
        console.log(res);
        this.show();
        this.showFlash();
        this.getAllProducts();
      })

  }

  
  myComment = {
    title:  '',
    bodyComment : ''
    };
  public opened = true;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open(id:number ) {
    this.opened = true;
  }
favourite : any;
nbrFav : number = 0;
  public submit(id:number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.post("http://localhost:8091/api/addComment/"+ id,this.myComment,httpOptions).subscribe(res=>{
        console.log(res);
        this.getAllProducts();
        this.dataSaved = true;
      this.close();
      })
      this.dataSaved = true;
      this.show();
      this.close();
  }

  getFavourite(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.httpclient.get("http://localhost:8091/api/favourite",httpOptions).subscribe(res=>{

     this.favourite =res ; 
     this.nbrFav = this.favourite.length ; 
     alert(res);
     console.log(res);

    })
  }
  addDeslikes(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/dislike/"+ id,{},httpOptions).subscribe(res=>{
        console.log(res);
        this.show();
        this.getAllProducts();
      })
  }
  getAllProducts(){
      this.prodSer.getAllproducts().subscribe(res=>{
        console.log(res);
        this.products = res;
        //alert(res);
      })
  }

  getAllBooks(){
    this.bookserv.getBooks().subscribe(res=>{
      console.log(res);
      this.books =res;

    })
  }

  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      alert(res);
      this.profs=res;
    })
  }

  sendmail(f: NgForm){
    if(f.valid){
      this.mailtr.postMail(f.value).subscribe(res=>{
        console.log(res);
      })
    }
  }
  ngOnInit(): void {
    this.getFavourite();
    this.getPrifile();
this.getAllProducts();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.username2 = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username2 = this.authService.getLoggedInUser();
    });
    this.getAllBooks();
  }
  logout() {
    this.authService.logout();
    this.authService.loginSubject.next(null);
    this.router.navigate(['welcome']);
  }
  login(f) {
    this.authService.login(this.username, this.password)
      .pipe(
        switchMap((success) => this.authService.storeToken(success))
      ).subscribe(() => {
        this.authService.loginSubject.next(null);
        this.getCurrentUser();
        this.router.navigate(['/book']);
        this.flashMessage.show('You were successfully logged in!', { cssClass: 'card-panel green lighten-4', timeout: 3000 });
      }, error => {
        this.flashMessage.show('Wrong email/password', { cssClass: 'card-panel red lighten-3', timeout: 3000 });
      });
  }
  register(f) {
    this.authService.register(this.username,this.email, this.password).subscribe(success => {
      this.router.navigate(['/book']);
      // tslint:disable-next-line:max-line-length
      this.flashMessage.show('You are successfully registered! You can now login.', { cssClass: 'card-panel green lighten-4', timeout: 3000 });
    }, error => {
      this.flashMessage.show('Something went wrong', { cssClass: 'card-panel red lighten-3', timeout: 3000 });
    });
  }
}
