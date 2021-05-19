import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ayoubsiedbar',
  templateUrl: './ayoubsiedbar.component.html',
  styleUrls: ['./ayoubsiedbar.component.scss']
})
export class AyoubsiedbarComponent implements OnInit {

  constructor(private authService: AuthService,private router : Router) { }
  profs: any=null;
  isLoggedIn:boolean;
  username: string;
  ngOnInit(): void {
    this.getPrifile();

    this.isLoggedIn = this.authService.isLoggedIn();
    this.username = this.authService.getLoggedInUser();

    this.authService.loginSubject.asObservable().subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.username = this.authService.getLoggedInUser();
    });
  }
  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      alert(res);
      this.profs=res;
    })
  }

  logout() {

    alert("au revoir");
    this.authService.logout();
    this.authService.loginSubject.next(null);
    this.router.navigate(['login']);
  }
}
