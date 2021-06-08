import * as moment from "moment"
import { Moment } from "moment"
import { Product } from "../../add-product/models/product"

export class Publicity {
id : number ; 
startDateP :Moment;
endDateP: Moment; 
publicitycategory: string;
image :string;
current : boolean;
product: Product;
title: string;
subtitle:string;
}