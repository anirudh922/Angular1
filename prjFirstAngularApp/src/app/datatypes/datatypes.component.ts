import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {


  name:string = "SRI";
  age:number;
  hobbies:string[];
  marks:Array<number>
  Istrue:boolean;
  tuplevel:[string,number,boolean];
  dynamicvalue:any;
  student:any;
  picture="assets/images/doll.jpg"
  constructor() {
    this.age=30;
    this.hobbies=["Playing","Singing" ];
    this.marks=[90,78,89];
    this.Istrue=false;
    this.tuplevel=["Pune",1200,true];
    this.dynamicvalue=89;
    this.student={fathername:"Raj",Address:"TNB ROAD CHENNAI 42"};
   }

  ngOnInit() :void {
  }

}
