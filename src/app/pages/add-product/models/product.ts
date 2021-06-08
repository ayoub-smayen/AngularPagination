/*export class Product {



    id? : number;
    name?:string;
    categoryname?:string;
    promotion?: number;
    code?:string;
    initial_price?:number;
    price?:number;
    quantity?:number;
    image?:string;
    expdate?:string;
    generalrate?:number;
    nature?:string;
    matiere?:number;
    energie?:number;
    matiere_grasse?:number;
    description?:string;
    
      constructor(
        id?: number, 
        name?: string, 
        categoryname?: string, 
        promotion?: number, 
        code?: string, 
        initial_price?: number, 
        price?: number, 
        quantity?: number, 
        image?: string, 
        expdate?: string, 
        generalrate?: number, 
        nature?: string, 
        matiere?: number, 
        energie?: number, 
        matiere_grasse?: number, 
        acide_gras_sature?: number, 
        sucres?: number, 
        fibres?: number, 
        proteines?: number, 
        sel?: number, 
        fruits?: number,
        description?:string
    ) {
        this.id = 0
        this.name = name
        this.categoryname = categoryname;
        this.promotion = 0
        this.code = code
        this.initial_price = 0
        this.price = price
        this.quantity = quantity
        this.image = image
        this.expdate = expdate
        this.generalrate = 0
        this.nature = nature
        this.matiere = matiere
        this.energie = 1
        this.matiere_grasse = 1
        this.acide_gras_sature = 1
        this.sucres = 1
        this.fibres = 1
        this.proteines = 1
        this.sel = 1
        this.fruits = 1
        this.description=description
      }
    acide_gras_sature?:number;
    sucres?:number;
    fibres?:number;
    proteines?:number;
    sel?:number;
    fruits?:number; 

}*/

import { Moment } from "moment";
import { Category } from "../../Product-categories/models/Category";



export class Product {
  id : number;
  name:string;
  categoryname:string;
  promotion: number;
  code:string;
  initial_price:number;
  price:number;
  quantity:number;
  image:string;
  expDate:Moment;
  generalrate:number;
  nature:string;
  matiere:number;
  energie:number;
  matiere_grasse:number;
  description:string;
  acide_gras_sature:number;
  sucres:number;
  fibres:number;
  proteines:number;
  sel:number;
  fruits:number; 
  productCategory: Category;

}