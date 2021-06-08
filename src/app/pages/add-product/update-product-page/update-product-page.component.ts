import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { routes } from 'src/app/consts';
import { Category } from '../../Product-categories/models/Category';
import { CategoryService } from '../../Product-categories/services';
import { Product } from '../models/product';
import { ProductService } from '../services';

@Component({
  selector: 'update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrls: ['./update-product-page.component.scss']
})
export class UpdateProductPageComponent implements OnInit{
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    console.log(this.id) // (+) converts string 'id' to a number

    // In a real app: dispatch action to load the details here.
 });
  }

}

@Component({
  selector: 'update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update.scss']
})
export class UpdateProductComponent implements OnInit{
  public routes: typeof routes = routes;
  public product : Product;
  public categories : Category[];
  id: number;
  private sub: any;



  constructor(private http :HttpClient,private categoryservice : CategoryService ,
    private productservice : ProductService,private _snackBar: MatSnackBar,private route: ActivatedRoute) {
    this.categories=[];
    this.product=new Product();
  
  
   }
  
  Natures: String[] = ["Alimentaire", "Electromenager", "cosmetique", "hygiene", 
    "nettoyage" , "divertissement" , "textil" ,"decoration" , "electronique" ,
    "cuisine" , "autre"
 ];

 Matieres: String[] = [
  "carton","papier","vegetal","bioplastique","tissu","papier_plastifie",
  "bois","verre","plastique",
  "metal","aluminium","Polystyrene","plastique_type_bouteille","autre"
];

 selectedValue : string;
 selectedid :number;
 matiere:string;
 public products : Product[];
 public dataSource: MatTableDataSource<Product>;

 ngOnInit(): void {
  this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    console.log(this.id) // (+) converts string 'id' to a number

    // In a real app: dispatch action to load the details here.
 });
  this.getcategories();
   this.getproduct(this.id);


}

public getcategories(): void {
  this.categoryservice.loadCategoryTableData().subscribe(

      (response: Category[])=> {
         this.categories=response;
        
      },
      (error: HttpErrorResponse)=> {
        //alert(error.message);
      }
    );
    }

    durationInSeconds = 5;
    openSnackBar() {
      this._snackBar.openFromComponent(PizzaPartyComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }


    public getproduct(id): void {
      this.productservice.getProduct(id).subscribe(
    
          (response: Product)=> {
             this.product=response;
            
          },
          (error: HttpErrorResponse)=> {
            //alert(error.message);
          }
        );
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

        save(product): void {
        
          this.productservice.updateProduct(product)
            .subscribe();
            this.getproducts();
            
        }

  
}


 





  

   



@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}