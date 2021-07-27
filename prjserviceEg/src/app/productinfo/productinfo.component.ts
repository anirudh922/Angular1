import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../ProductServices';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {


  constructor(private pser:ProductService,private route:ActivatedRoute) { }
  pid?:number;
  ngOnInit(): void {

    //getting id from url

    this.route.paramMap.subscribe((params:ParamMap)=>
    {
      this.pid=parseInt(this.route.snapshot.params.id) //in video maam is using depreceted item

    });

    this.getSelectedProduct();
  }
  //call the getproductinfo from product service by passing productid

  selectedpro:any;
  getSelectedProduct()
  {
    this.selectedpro=this.pser.getProductInfo(this.route.snapshot.params.id);
  }
}
