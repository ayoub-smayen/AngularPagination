import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../Address';
import { Claim } from '../claim';
import { ClaimService } from '../claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  name='';
id: any;
message: string;
  listClaim: Claim[];
  list:Claim;
  claim: Claim;
  search: string;
  constructor(private service: ClaimService, private router: Router) { }

  ngOnInit(): void { let resp=this.service.getAll();
    resp.subscribe((res)=>this.listClaim=res);
  }

  public getClaims(){
    let resp= this.service.getAll();
    resp.subscribe((res)=>this.listClaim=res);
   }

   public deleteClaim(id1: number){
    let resp=this.service.deleteClaim(id1);
    resp.subscribe((res)=>this.listClaim=res);
 }
 


public updateClaim(id){
  this.router.navigateByUrl('updateClaim');
}

  
  
       


}
