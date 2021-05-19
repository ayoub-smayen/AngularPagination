import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-wishlistfhomepage',
  templateUrl: './wishlistfhomepage.component.html',
  styleUrls: ['./wishlistfhomepage.component.scss']
})
export class WishlistfhomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  calcTotal() {
    return this.products.reduce((acc, prod) => acc+= prod.num ,0)
  }
  removeProduct(product) {
    this.productRemoved.emit(product)
  }

}
