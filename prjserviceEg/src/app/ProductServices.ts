import { Injectable } from "@angular/core";
import { Product } from "./Model/product";

@Injectable()

export class ProductService
{
    product:Product[];
    constructor()
    {
        this.product=[
            {pid:11,pname:'pencil',price:10,quantity:10,image:'assets/pencil.png',desc:'No discount'},
            {pid:12,pname:'ball',price:100,quantity:5,image:'assets/ball.jpg',desc:'10% discount'},
            {pid:13,pname:'doll',price:250,quantity:30,image:'assets/doll.jpg',desc:'50 discount'},

        ];
    }

    //fetch all the product info

    getProducts()
    {
        return this.product;
    }

    //fetch all the product details by passing pid
    getProductInfo(prodid?:number)
    {
    let pinfo;
    this.product.forEach(ele=>{
        if(ele.pid==prodid)
        {
            pinfo=ele;
        }
    });

    
    return pinfo;
}

}
