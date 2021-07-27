import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DirectivesComponent } from './directives/directives.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { Assignment1Component } from './assignment1/assignment1.component';
//DECORATOR:METADATA INFORMATION

@NgModule({
  declarations: [  //CONTAINS THE LIST OF COMPONENT CLASS
    AppComponent,
    DatatypesComponent,
    DirectivesComponent,
    TwowaybindingComponent,
    Assignment1Component
  ],
  imports: [ //IMPORTS REQUIRED INBUILD MODULE
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],  //SERVICES .DI
  bootstrap: [AppComponent]
})
export class AppModule { }
