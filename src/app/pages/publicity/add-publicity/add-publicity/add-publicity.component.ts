import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/pages/add-product/models/product';
import { ProductService } from 'src/app/pages/add-product/services';
import { Publicity } from '../../models/publicity';
import { PublicityService } from '../../service/publicity.service';

@Component({
  selector: 'app-add-publicity',
  templateUrl: './add-publicity.component.html',
  styleUrls: ['./add-publicity.component.css']
})
export class AddPublicityComponent implements OnInit {
  public publicity : Publicity = new Publicity() ;
  selectedValue : string;
  id:number;
  Balises: String[] = ["Balise1","Balise2","Balise3","Balise4","balise5"
];
  constructor(private publicityservice : PublicityService) { }

  ngOnInit(): void {
  }

  message:any;
  onSubmit(productid){

  let resp=this.publicityservice.addPublicity(productid,this.publicity);
    resp.subscribe((data)=>this.message=data); 
    console.log(this.publicity);



  }
}

@Component({
  selector: 'searchforproduct',
  templateUrl: './searchforproduct.component.html',
  styleUrls: ['./searchforproduct.component.scss']
})

export class SearchforproductComponent implements OnInit {
  products : Product[];
  public dataSource: MatTableDataSource<Product>;
  public displayedColumns: string[] = ['id','name'];
  constructor(private productservice : ProductService) { }

  ngOnInit(): void {
    this.getproducts()
  }

  public getproducts(): void {
    this.productservice.loadProductTableData().subscribe(
  
        (response: Product[])=> {
          this.products=response;
          this.dataSource = new MatTableDataSource(this.products);
  
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
