import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Model/employee.model';



@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emp:Employee[]=[
    {eid:1001,ename:"Sri",gender:"Male",salary:30000},
    {eid:1001,ename:"Raj",gender:"Male",salary:35000},
    {eid:1001,ename:"Banu",gender:"Female",salary:25000},
    {eid:1001,ename:"Jamuna",gender:"Female",salary:40000},
  ];

  //object creationof the type any
  //getempinfo:any={}
  //object of type employee

  getempinfo:Employee={};

  //Adding Employee details into emp array

  addEmployee()
  {
    debugger;
    this.emp.push(this.getempinfo);
    this.getempinfo={};//emptying the object
  }

  //deleting the employee info from array by passing emp id

  msg:string="";

    deleteEmployee(empid?:number)
    {
        debugger;
        for(let i=0;i<this.emp.length;i++) //iterate through array
        {
          if (this.emp[i].eid==empid) //particular id exists or not?
          {
            this.emp.splice(i,1);  //splice is an array method to remove one record at a time
            this.msg="Record Deleted";
          }
          else{
            this.msg="Record Not Found!!";
          }
        }
    }

    updateEmployee()
    {
      let k=this.getempinfo.eid;
      for(let i=0;i<this.emp.length;i++){ //iterate through array
        if(this.emp[i].eid==k){
            this.emp[i]=this.getempinfo;
            this.getempinfo={};
            this.msg="record Updated"
        }
      }
    }
    EditEmployee(empid?:number)
    {
      for(let i=0;i<this.emp.length;i++) //iterating through array
      {
        if(this.emp[i].eid==empid){ //particular emp id exists
           this.emp[i].eid==empid
        }
      }
    }
}
