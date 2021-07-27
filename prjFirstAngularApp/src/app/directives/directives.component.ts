import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }
  employee:any[]=[
    {"name":"SIBI","age":"20","dept":"HR"},
    {"name":"Raj","age":"22","dept":"Admin"},
    {"name":"ABI","age":"21","dept":"Admin"},
    {"name":"Banu","age":"20","dept":"UI"},
    {"name":"Rekha","age":"20","dept":"UI"},
   
  ]

  ngOnInit(): void {
  }

}
