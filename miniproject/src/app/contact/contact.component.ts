import { Component, OnInit } from '@angular/core';
import { Contact } from '../Model/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Con:Contact[]=[
    {cname:"Anirudh",phoneno:"8689835575"},
    {cname:"Ramu",phoneno:"8454835575"},
    {cname:"Anirudh",phoneno:"7474835575"},
  ];

  //object creationof the type any
  //getempinfo:any={}
  //object of type employee

  getConinfo:Contact={};

  //Adding Employee details into emp array

  addContact()
  {
    debugger;
    this.Con.push(this.getConinfo);
    this.getConinfo={};//emptying the object
  }

  //deleting the employee info from array by passing emp id

  msg:string="";

    deleteContact(cname?:string)
    {
        debugger;
        for(let i=0;i<this.Con.length;i++) //iterate through array
        {
          if (this.Con[i].cname==cname) //particular id exists or not?
          {
            this.Con.splice(i,1);  //splice is an array method to remove one record at a time
            this.msg="Record Deleted";
          }
          else{
            this.msg="Record Not Found!!";
          }
        }
    }

    updateEmployee()
    {
      let k=this.getConinfo.cname;
      for(let i=0;i<this.Con.length;i++){ //iterate through array
        if(this.Con[i].cname==k){
            this.Con[i]=this.getConinfo;
            this.getConinfo={};
            this.msg="record Updated"
        }
      }
    }

}
