import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { CategoryService } from '../services';


@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {


  ngOnInit(): void {
  }

  public employeeTableData$: Observable<Category[]>

  constructor(private service: CategoryService) {

    this.employeeTableData$ = service.loadCategoryTableData();
  }
}
