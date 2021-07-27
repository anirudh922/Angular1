import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/customer';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-templatedforms',
  templateUrl: './templatedforms.component.html',
  styleUrls: ['./templatedforms.component.css']
})
export class TemplatedformsComponent implements OnInit {

  constructor() { }

  cust:Customer={};
  ngOnInit(): void {
  }
  onRegister(cformdata:NgForm)
  {

    //ngform data
    console.log(cformdata.value);
    //object
    console.log(this.cust);
  }

}
