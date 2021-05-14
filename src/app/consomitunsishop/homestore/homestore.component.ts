import { Component, OnInit , Input } from '@angular/core';
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-homestore',
  templateUrl: './homestore.component.html',
  styleUrls: ['./homestore.component.scss']
})
export class HomestoreComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http :ProductService,
    private authService: AuthService,
    private proser:ProductService,
    public router: Router
    ) { this.products =[];}
  products :  Product[];
  // @Input()  username :string ;
  // @Input()  isLogging : boolean  ;


 //@Input()
 
 term :string;
  

  ngOnInit(): void {
    this.getAllproducts();

    this.getNotif();

    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();
    });
  }

  isLoggedIn: boolean;
  username: string;
  roles: string[];
fg1 : any;
  fg :number;

  getNotif(){
    this.proser.getColisenattend().subscribe(res=>{
               this.fg1 =res;
              console.log(res);
              alert(res);
               this.fg = this.fg1.length ;
    });
  }
  getAllproducts(){
    this.http.getAllproducts2().subscribe(res=>{

       this.products = res ;

       console.log(res);
    })
}
  
}
