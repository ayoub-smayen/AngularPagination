import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-finalhomepage',
  templateUrl: './finalhomepage.component.html',
  styleUrls: ['./finalhomepage.component.scss']
})
export class FinalhomepageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http :ProductService,
    private authService: AuthService,
    private proser:ProductService,
    public router: Router) { }

    products :  Product[];
    // @Input()  username :string ;
    // @Input()  isLogging : boolean  ;
  
  
   //@Input()
   
   term :string;
   getAllproducts(){
    this.http.getAllproducts2().subscribe(res=>{

       this.products = res ;

       console.log(res);
    })
}
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

}
