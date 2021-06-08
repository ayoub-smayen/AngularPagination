import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { Publicity } from '../../models/publicity';
import { PublicityService } from '../../service/publicity.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { Product } from 'src/app/pages/add-product/models/product';

export interface DialogData {
  publicitycategory :string;
  id: number;
  product:Product;
  current:boolean;
  image:string;
  title:string;
  subtitle:string;
  
}


@Component({
  selector: 'app-publicities',
  templateUrl: './publicities.component.html',
  styleUrls: ['./publicities.component.scss']
})
export class PublicitiesComponent implements OnInit {
  public publicities : Publicity[] ;
  constructor(private publicityservice : PublicityService,public dialog: MatDialog) {}
  public displayedColumns: string[] = ['id','publicitycategory','product','current','startDateP','startDatePt','endDateP','endDatePt','action'];
  public dataSource: MatTableDataSource<Publicity>;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;


publicitycategorys :string;
ids : number;
products:Product;
currents:boolean;
images:string;
titles:string;
subtitles:string;

openDialog(id,publicitycategory,product,current,image,title,subtitle) {
 this.ids=id;
this.publicitycategorys=publicitycategory;
this.products=product;
this.currents=current;
this.images=image;
this.titles=title;
this.subtitles=subtitle;


  const dialogRef = this.dialog.open(DialogFromMenuExampleDialog1, { data: {id: this.ids , publicitycategory: this.publicitycategorys,
    product: this.products,current: this.currents, image: this.images, title: this.titles,subtitle: this.subtitles
  }});

  // Manually restore focus to the menu trigger since the element that
  // opens the dialog won't be in the DOM any more when the dialog closes.
  dialogRef.afterClosed().subscribe(() => this.menuTrigger);
 
}

 

  ngOnInit(): void {this.getpublicities()
  }

  public getpublicities(): void {
    this.publicityservice.getPublicities().subscribe(
  
        (response: Publicity[])=> {
           this.publicities=response;
           this.dataSource = new MatTableDataSource(this.publicities);
          
          
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


}

@Component({
  selector: 'dialog-from-menu-dialog-1',
  templateUrl: 'dialog-from-menu-example-dialog-1.html',
  
  styleUrls: ['./publicities.component.scss'],
})
export class DialogFromMenuExampleDialog1 {

  constructor(private publicityservice :PublicityService,
    public dialogRef: MatDialogRef<DialogFromMenuExampleDialog1>,
    @Inject(MAT_DIALOG_DATA) public datas: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deletepublicity(id){
    this.publicityservice.deletePublicity(id).subscribe(result=>{this.publicityservice.getPublicities();
    });
  }


  
}