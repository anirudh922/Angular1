import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Reactiveforms1Component } from './reactiveforms1/reactiveforms1.component';
import { TemplatedformsComponent } from './templatedforms/templatedforms.component';
import { Reactiveforms2Component } from './reactiveforms2/reactiveforms2.component';




const routes: Routes = [


  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path: 'register',component:TemplatedformsComponent},
  {path: 'login',component:Reactiveforms1Component},
  {path: 'New', component:Reactiveforms2Component},

  {
    path:'**',component:NotfoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
