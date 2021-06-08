import { SelectionModel } from '@angular/cdk/collections';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Category } from '../models/Category';
import { CategoryService } from '../services';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit { @Input() employeeTableData: Category[];
  public displayedColumns: string[] = ['id', 'name','action'];
  
  public dataSource: MatTableDataSource<Category>;
 /* public selection = new SelectionModel<Category>(true, []);

  public isShowFilterInput = false;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Category>(this.employeeTableData);

    this.dataSource.paginator = this.paginator;
  }
  
*/
  /** Whether the number of selected elements matches the total number of rows. 
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. 
  public masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row 
  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
 
*/




/*
dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

  */

public categories : Category[];


  
constructor(private http :HttpClient , private productcategoryservice :CategoryService){
  this.categories =[];
}

ngOnInit(){

  this.getcategories();
  
}

public getcategories(): void {
  this.productcategoryservice.loadCategoryTableData().subscribe(

      (response: Category[])=> {
         this.categories=response;
         this.dataSource = new MatTableDataSource(this.categories);
        
      },
      (error: HttpErrorResponse)=> {
        //alert(error.message);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  


  onSubmit(data){
    console.log(data);
    this.http.post('http://localhost:8080/productcategory/addproductcategory',data).subscribe(result=>{console.log(data);
  });
  }

deleteCategory(id){
  this.productcategoryservice.deleteCategory(id).subscribe(result=>{this.getcategories();
  });
}

}


/*
this.dataSource = new MatTableDataSource();
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
*/

