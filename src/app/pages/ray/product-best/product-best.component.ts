import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { ProductModel, RayModel } from '../models/ray.model'
import { RayService } from '../services/ray.service'

@Component({
  selector: 'app-product-best',
  templateUrl: './product-best.component.html',
  styleUrls: ['./product-best.component.css'],
})
export class ProductBestComponent implements OnInit {
  product: Array<ProductModel> = []
  public dataSource: MatTableDataSource<any>
  notification: string = ''
  constructor(private readonly rayService: RayService) {}
  public displayedColumns: string[] = [
    'productId',
    'brand',
    'codebar',
    'createdAt',
    'updatedAt',
    'price',
    'productName',
    'quantity',
    'remisePrice',
  ]
  ngOnInit(): void {
    this.loadProducts()
    this.getPromotion()
  }

  async loadProducts() {
    try {
      const results: any = await this.rayService.bestProducts()
      this.product = results
      this.product = this.product.filter((p) => p)
      this.dataSource = new MatTableDataSource(this.product)
    } catch (error) {
      console.log({ error })
    }
  }

  async getPromotion() {
    try {
      const result: any = await this.rayService.promotionProducts()
      this.notification = result
    } catch (error) {
      console.log({ error })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
