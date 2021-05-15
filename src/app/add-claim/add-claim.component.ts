import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { Router } from '@angular/router';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {
  
    sub: string;
    description: string;
  constructor(private servicee: ClaimService,private router: Router) { }

  ngOnInit(): void {
  }
public addClaim(){

  let cl= new Claim; 
cl.desc=this.description;
cl.subject=this.sub;
  let resp= this.servicee.add(cl);
  resp.subscribe();
  
    this.router.navigateByUrl('Listclaims');

  
 }
}




