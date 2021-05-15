import { Component, OnInit } from '@angular/core';
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
id: number;
message: string;
  listClaim: Claim[];
  list:Claim;
  claim: Claim;
  constructor(private service: ClaimService) { }

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
 public searchClaimByid(){
  //let resp=this.service.findClaimbyid(this.id);
  //resp.subscribe((data)=>
  this.listClaim.filter(el=>el.claim_id==this.id);

}





  
  
       


}
