import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ayoubheader',
  templateUrl: './ayoubheader.component.html',
  styleUrls: ['./ayoubheader.component.scss']
})
export class AyoubheaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private authService: AuthService) { }
  profs: any;
  ngOnInit(): void {
  }
  getPrifile(){
    this.authService.getprofile().subscribe(res=>{
      console.log(res);
      alert(res);
      this.profs=res;
    })
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
