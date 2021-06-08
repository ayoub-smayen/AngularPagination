import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { ChartsService } from '../../services';
import { Claim } from '../../models/claim';


@Component({
  selector: 'app-claim-table',
  templateUrl: './claim-table.component.html',
  styleUrls: ['./claim-table.component.scss'],
})
export class ClaimTableComponent implements OnInit {
  constructor(private service :ChartsService){
    this.loadclaims();
  }
  
 
  public displayedColumns: string[] = [
    'select', 'idclaim',
    'descreption',
    'subject_claim',
    'state',
    
  ];
  public dataSource: MatTableDataSource<Claim>;
  public selection = new SelectionModel<Claim>(true, []);

  public isShowFilterInput = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

   ngOnInit(): void {
    
    


    
  }

  public loadclaims():void{
    this.service.getClaim().subscribe(res => { this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;})
  }
  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public showFilterInput(): void {
    this.isShowFilterInput = !this.isShowFilterInput;
 
  }
}
