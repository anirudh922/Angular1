import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  welcomeMsg()
  {
    debugger;
    alert("Good Morning!!");
  }

  //EG2
  fname:string="";
  displayfullName(name:HTMLInputElement)
  {
    debugger;
    this.fname=name.value+"kumar";
  }
  //EG3
  calbonus=0;
  displayBonus(sal:HTMLInputElement)
  {
    this.calbonus=parseInt(sal.value)+1000;
  }


}
