import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payementshop',
  templateUrl: './payementshop.component.html',
  styleUrls: ['./payementshop.component.scss']
})
export class PayementshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  cardNumber: "4283-7396-0975-3952";
cardHolder: string;
expirationMonth: "june";
expirationYear: "2022";
ccv: 123;

}
