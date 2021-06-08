import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { StockModel } from '../models/ray.model'
import { RayService } from '../services/ray.service'

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css'],
})
export class StockCreateComponent implements OnInit {
  model: StockModel = {
    entry_date: null,
    exit_date: null,
    amount: 0,
  }
  constructor(
    private readonly rayService: RayService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  async onSave() {
    try {
      if (this.model.amount <= 0) {
        alert('Amount should be positive')
        return
      }
      if (!this.model.entry_date) {
        alert('Invalid Entry Date')
        return
      }
      if (!this.model.exit_date) {
        alert('Invalid Exit Date')
        return
      }
      const results: any = await this.rayService.saveStock(this.model)
      this.router.navigate(['/rays/stock/list'])
    } catch (error) {
      console.log({ error })
    }
  }
}
