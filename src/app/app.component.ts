import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
firstName='Bilal';
lastName='Ahmed';
status:boolean;

constructor(){
console.log('constructor..');
this.getUserStatus();
}
displayFirstName(){
  return this.firstName;
}

getUserStatus(){
  this.status=false;
}
}
