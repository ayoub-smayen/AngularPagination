import { Component, OnInit, Input , Output , EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-childshop',
  templateUrl: './childshop.component.html',
  styleUrls: ['./childshop.component.scss']
})
export class ChildshopComponent implements OnInit , OnChanges {

  constructor() { }

  @Input() stock: number;
  @Input() productId: number;
  @Input()  Countercoint : number;
  @Output() stockValueChange = new EventEmitter();

  ngOnInit(): void {
  }



  color = '';
  updatedstockvalue: number;
  stockValueChanged() {
      this.stockValueChange.emit({ product_id: this.productId, updatdstockvalue: this.updatedstockvalue });
      this.updatedstockvalue = null;
  }
  ngOnChanges() {

      if (this.stock > 10) {
          this.color = 'green';
      } else {
          this.color = 'red';
      }
  }

}
