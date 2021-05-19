import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cartprodpage',
  templateUrl: './cartprodpage.component.html',
  styleUrls: ['./cartprodpage.component.scss']
})
export class CartprodpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  modelChanged(product) {
     if (this.product.num === 0) {
      this.productRemoved.emit(this.product)
     }
  }

}
