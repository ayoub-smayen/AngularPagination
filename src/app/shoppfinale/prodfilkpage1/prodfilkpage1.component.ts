import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { Rayon } from 'src/app/models/rayon';

@Component({
  selector: 'app-prodfilkpage1',
  templateUrl: './prodfilkpage1.component.html',
  styleUrls: ['./prodfilkpage1.component.scss']
})
export class Prodfilkpage1Component implements OnInit {
  category  : any ;
  categories :  Category[];

selectedvalue:any;
  rayons : Rayon[];

ty :any ;
   
/*
selectChangeHandler (event: any) {
  //update the ui
  if(event.target.value == 1){
    this.getCatByRay(event.target.value).subscribe((data:Category[]) =>this.categories = data);
  }
  if(event.target.value == 0){
    this.getCatByRay(event.target.value).subscribe((data:Category[]) =>this.categories = data);
  }
}*/


getRayon(){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
    })
  };
  return  this.httpclient.get("http://localhost:8091/api/rayons",httpOptions).subscribe((res:any)=>{

  alert("000000000000000000" + res);
this.rayons=res  ;


  })
    
}

      getCatByRay(id:number){

        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
          })
        };


          return  this.httpclient.get("http://localhost:8091/api/catray/" +  id,httpOptions)
          
          .subscribe(res=>{
this.ty = res ;

this.categories  = this.ty.cat ;

          })
      }

      
      selected;
      selectedData;
      
      /*constructor(){
        this.selectedData = this.someData;
      }*/
      
      onSelect(){
        
        //console.log(val);
        this.getCategriesbyid(this.selectedvalue)
        //this.selectedData = this.categories.filter(x => x.ray_id == val)
      }
      
    
  constructor(private catserv : CategoryService,
    
    private prodSer : ProductService,private httpclient :  HttpClient,
    ) { this.categories =[];this.products = [];
    
    this.rayons =[];
    }

    public opened = true;
    public dataSaved = false;
  
    public close() {
      this.opened = false;
    }
  
    public open() {
      this.opened = true;
    }
  
    public submit() {
      this.dataSaved = true;
      this.close();
    }

    cartProductList = [];

    addProductToCart(product:Product) {

      if(this.opened == false)
      this.open();

      const productExistInCart = this.cartProductList.find(({name}) => name === product.productname); // find product by name
      if (!productExistInCart) {
        this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
        return;
      }
      productExistInCart.num += 1;
    }
     removeProduct(product) {
      this.cartProductList = this.cartProductList.filter(({name}) => name !== product.productname)
     }

  ngOnInit(): void {

    this.getAllCategoreis();
    this.getAllProducts();
    this.getRayon();
  }

  getAllCategoreis(){
    this.catserv.getAllVCAtegoris().subscribe(res=>{
      console.table(res);
      this.categories=res;
    })
  }

  getCategriesbyid(id: number){

    //alert("ok");

      this.catserv.getatbyid2(id).subscribe(res=>{
           this.category  = res ;

           this.products= this.category.pr ;
           console.log(res);

          // this.categories = [];
      })

      
     
  }

  addDeslikes(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/dislike/"+ id,{},httpOptions).subscribe(res=>{
        console.log(res);
       // this.show();
       window.location.href = window.location.href; 
        this.getAllProducts();
      })
  }

  myComment = {
    title:  '',
    bodyComment : ''
    };
  addLikes(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/like/"+ id,{},httpOptions).subscribe(res=>{
        console.log(res);
       // this.show();
        //this.showFlash();
        window.location.href = window.location.href; 
        this.getAllProducts();
      })

  }

  
  myproduct : string = '';
  coins : number;
  em = {

    firstName : '',
    lastName : '',
    emailAddress : ''


  };
  

  searcht(event){
    // event.preventDefault();
     //
         const httpOptions = {
           headers: new HttpHeaders({
             'Content-Type': 'application/json',
             'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
           })
         };
     
     return this.httpclient.get<Product[]>(`http://localhost:8091/api/findproduct/${this.myproduct}` ).subscribe(res=>{
       this.products = res;
       console.log(res);
     
     });
     
          
       }


   addViews(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
      return this.httpclient.put("http://localhost:8091/api/vues/"+ id,{},httpOptions).subscribe(res=>{
        console.log(res);
      //  this.show();
        //this.showFlash();
        window.location.href = window.location.href; 
        this.getAllProducts();
      })

  }

  getAllProducts(){
    this.prodSer.getAllproducts().subscribe(res=>{
      console.log(res);
      this.products = res;
      //alert(res);
    //  window.location.href = window.location.href; 
    })
}


  products : any;
}
