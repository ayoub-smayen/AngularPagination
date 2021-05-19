import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-update-claim',
  templateUrl: './update-claim.component.html',
  styleUrls: ['./update-claim.component.css']
})
export class UpdateClaimComponent implements OnInit {
  sub: string;
    description: string;
  paramUrl: any;
  constructor(private servicee: ClaimService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.paramUrl=this.activatedRoute.snapshot.params.id2;

  }

public updateC(){

  let cl= new Claim(); 
cl.desc=this.description;
cl.subject=this.sub;
  let resp= this.servicee.updateclaim(this.paramUrl,cl);
  resp.subscribe();
  
    //this.router.navigateByUrl('Listclaims'); 




}


}
