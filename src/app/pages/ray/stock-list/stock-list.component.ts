import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { StockModel } from '../models/ray.model'
import { RayService } from '../services/ray.service'

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  stocks: Array<StockModel> = []
  public dataSource: MatTableDataSource<StockModel>
  constructor(private readonly rayService: RayService) {}
  public displayedColumns: string[] = [
    'id',
    'amount',
    'entry_date',
    'exit_date',
    'action',
  ]
  ngOnInit(): void {
    this.loadStocks()
  }

  async loadStocks() {
    try {
      const results: any = await this.rayService.loadStock()
      this.stocks = results
      this.dataSource = new MatTableDataSource(this.stocks)
    } catch (error) {
      console.log({ error })
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  async onDelete(id) {
    try {
      const results: any = await this.rayService.deleteStock(id)
      this.loadStocks()
    } catch (error) {
      console.log({ error })
    }
  }

  async sendMail() {
    try {
      const results: any = await this.rayService.sendMail()
    } catch (error) {
      console.log({ error })
    }
  }
}
