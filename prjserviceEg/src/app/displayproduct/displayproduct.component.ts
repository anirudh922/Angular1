import { Component, OnInit } from '@angular/core';
import { ProductService } from '../ProductServices';
import { Product } from '../Model/product';

@Component({
  selector: 'app-displayproduct',
  templateUrl: './displayproduct.component.html',
  styleUrls: ['./displayproduct.component.css']
})
export class DisplayproductComponent implements OnInit {

  //Injecting the Service

  constructor(private pservice:ProductService){}

  pro?:Product[];

  ngOnInit(): void {
    this.displayProductDetails();

  }

  displayProductDetails()
  {
    this.pro=this.pservice.getProducts();
  
  }

}
