import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  private selectedFile2;
  // imgURL: any;
   imageUrl2: any;
   
    products : Product[];
    
   product : Product ;
  constructor(private productService : ProductService , private http : HttpClient ,  private router : Router
    ) {this.product = new Product(); 
    
    
    this.products =[];
    }

  ngOnInit(): void {

    this.getProductsa();

  }

   

  getProductsa(){
   this.productService.getAllproducts2().subscribe(res=>{
     

       console.log(res);

         this.products  =res;




       
   })
       
  }
     
  
  
  public onFileChanged2(event) {
    console.log(event);
    this.selectedFile2 = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imageUrl2 = reader.result;
    };

  }
    
      
  
  addproducts(){

    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile2, this.selectedFile2.name);


    this.http.post('http://localhost:8091/api/upload', uploadData, { observe: 'response' })
    .subscribe((response) => {
      console.log(response);

      if (response.status === 200) {
        this.productService.addProductr(this.product).subscribe(
          
          (profile) => {
            console.table(this.product);
            //this.bookAddedEvent.emit();
            //window.location.reload();
            window.location.reload();
            this.router.navigate(['homestore']);
          }
        );
        console.log('Image uploaded successfully');
      } else {
        console.log('Image not uploaded successfully');
      }
    }
    );

       
       /*
    
      this.productService.addProductr(this.product).subscribe(res=>{
           

          console.log("upload success");
      })*/
      
  }

  
    
    /*

     product_id : number;
    productname :string;
    productdescription:string;
    quantity:number;
    price: number;
    brand :string;
    codebar:string;
    
    productImg:any;
   
   

   

   
    */
}
