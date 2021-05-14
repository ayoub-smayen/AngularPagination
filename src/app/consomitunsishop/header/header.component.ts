import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

/*
  @Input()  username :string ;
 
  @Input()  isLogging : boolean  = false ;
  constructor() { }

  ngOnInit(): void {
  }*/


  @Input()  term :string ;

  constructor(private authService: AuthService,
    private proser:ProductService,
    public router: Router) { this.fg=0;}


    isLoggedIn: boolean;
  username: string;
  roles: string[];
fg1 : any;
  fg :number;
//term :string ;
  getNotif(){
    this.proser.getColisenattend().subscribe(res=>{
               this.fg1 =res;
              console.log(res);
              alert(res);
               this.fg = this.fg1.length ;
    });
  }

  ngOnInit(): void {



    
  //}










    this.getNotif();

    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();
    });
  }
  logout() {
    this.authService.logout();
    this.authService.loginSubject.next(null);
    this.router.navigate(['login']);
  }

  isUserInRole(role) {
    if (role === 'admin') {
      return this.authService.isUserAdmin();
    }
    return false;
  }


}
