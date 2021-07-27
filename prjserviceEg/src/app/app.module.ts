import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './ProductServices';
import { DisplayproductComponent } from './displayproduct/displayproduct.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayproductComponent,
    ProductinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
