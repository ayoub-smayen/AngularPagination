import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Euser } from '../models/euser';
import { EuserserviceService } from '../services/euserservice.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  euser:Euser=null;
  message:string;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private euserserviceService: EuserserviceService) { }

  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id): void {
    this.euserserviceService.getById(id)
      .subscribe(
        data => {
          const fg = data; 
          this.euser = data;
          console.log(data);
          alert(data);
        },
        error => {
          console.log(error);
        });
  }


  updateTutorial(): void {
    console.table(this.euser);
    this.euserserviceService.addUser(this.euser)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
          alert(this.message);
          this.router.navigate(['/euser']);
        },
        error => {
          console.log(error);
        });
  }
}
