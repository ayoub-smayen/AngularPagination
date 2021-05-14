import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from "@angular/material/paginator";
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class PeriodicElement2 {
  name: string;
  y: number;
  selected: boolean;
  sliced: boolean;

  constructor(name,y,selected,sliced){
      this.name  =name ;
      this.y = y; 

      this.selected  =selected; 
      this.sliced  =sliced;
  }

  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
@Component({
  selector: 'app-ayoubdashboard',
  templateUrl: './ayoubdashboard.component.html',
  styleUrls: ['./ayoubdashboard.component.scss']
})
export class AyoubdashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart =[]  ;
       


  products : Product[];
  cat :  Category[];

  displayedColumns: string[] =['id', 'name', 'price', 'codebar','image'] ;
  dataSource :MatTableDataSource<Product>;
  
  displayedColumns2: string[] =['id', 'tag', 'categorytag'] ;
  dataSource2 :MatTableDataSource<Category>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private productService : ProductService,private categoryser :  CategoryService) {
    /*this.pieChart= [
      {
        name: 'Chrome',
        y: 0,
        sliced: true,
        selected: true
      }
    ]; */
    this.products  =[];

    this.cat =[];


  }

  nbprod : number=0  ;

  getAllCategory(){
       this.categoryser.getAllVCAtegoris().subscribe(res=>{
         this.cat = res ;

         this.dataSource2 = new MatTableDataSource<Category>(this.cat);
         this.dataSource2.paginator = this.paginator;
       })
  }

  ngOnInit(): void {
    
    this.getProductsa();

    this.getAllCategory();

    /*this.cat.forEach(el=>{
      el.category_id ,
      el.tags ,
      el.categoryType
    })*/

    //this.nbprod  = this.products.length;

    alert(this.nbprod);

    
    
  }
  getProductsa(){
    this.productService.getAllproducts2().subscribe(res=>{
      
 
        console.log(res);
 //alert(res);
          this.products  =res;

          this.nbprod = this.products.length;
         
        /*  this.products.forEach(el=>{
            el.productImg;
            el.product_id,
            el.productImg,
            el.productname,
            el.price
            el
            */
           

          //})
          this.pieChart=[{
            name: this.products[0].productname,
            y: this.products[0].quantity,
            sliced: true,
            selected: true
          }, {
            name: this.products[1].productname,
            y: this.products[1].quantity,
          }, {
            name:this.products[2].productname,
            y: this.products[2].quantity
          }, {
            name: this.products[3].productname,
            y: this.products[3].quantity
          }, {
            name: this.products[4].productname,
            y: this.products[4].quantity
          }, {
            name: this.products[5].productname,
            y: this.products[5].quantity
          }, {
            name: this.products[6].productname,
            y: this.products[6].quantity
          }, {
            name:this.products[7].productname,
            y: this.products[7].quantity
          }, {
            name: this.products[8].productname,
            y: this.products[8].quantity
          }];;
          

let i = 0 ;

         this.dataSource = new MatTableDataSource<Product>(this.products);
         this.dataSource.paginator = this.paginator;
 
        
              alert(this.pieChart);

 
        
    })
  

   /* this.products.forEach(el=>{
      
    
    // alert("here");
   /* if(i==1)
           this.pieChart.push(new PeriodicElement2(
           el.productname ,
           el.quantity ,
              true ,
              true,
      
            
           ));

           else 
           
           this.pieChart.push(new PeriodicElement2(
             el.productname ,
           el.quantity ,
              null,
           null 
             
           
            
           ));
     
         })

*/

        
   }
      
   

}
