import { Component, OnInit } from '@angular/core';
import { Department } from 'src/Model/department';

@Component({
  selector: 'app-departmentcrud',
  templateUrl: './departmentcrud.component.html',
  styleUrls: ['./departmentcrud.component.css']
})
export class DepartmentcrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dept:Department[]=[
    {did:1001,dname:"Java",dloc:"Mumbai"},
    {did:1002,dname:"c#",dloc:"Chennai"},
    {did:1003,dname:"DATA",dloc:"Pune"},
    
  ];

  getdepinfo:Department={};

  addDepartment()
  {
    debugger;
    this.dept.push(this.getdepinfo);
    this.getdepinfo={};//emptying the object
  }

  //deleting the department info from array by passing emp id

  msg:string="";

    deleteDepartment(deptid?:number)
    {
        debugger;
        for(let i=0;i<this.dept.length;i++) //iterate through array
        {
          if (this.dept[i].did==deptid) //particular id exists or not?
          {
            this.dept.splice(i,1);  //splice is an array method to remove one record at a time
            this.msg="Record Deleted";
          }
          else{
            this.msg="Record Not Found!!";
          }
        }
    }

    updateDepartment(deptid?:number)
    {
      let k=this.getdepinfo.did;
      for(let i=0;i<this.dept.length;i++){ //iterate through array
        if(this.dept[i].did==k){
            this.dept[i]=this.getdepinfo;
            this.getdepinfo={};
            this.msg="record Updated"
        }
      }
    }

    EditDepartment(deptid?:number)
    {
      for(let i=0;i<this.dept.length;i++) //iterating through array
      {
        if(this.dept[i].did==deptid){ //particular dep id exists
           this.dept[i].did==deptid
        }
      }
    }
}


