import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
firstName='Bilal';
lastName:string;
status:boolean;
posts:object[];
user={
  username:'',
  password:''
};

constructor(){
console.log('constructor..');
this.posts=[
  {title: 'Post 1'},
  {title: 'Post 2'},
  {title: 'Post 3'},
  {title: 'Post 4'},
  {title: 'Post 5'}
    ];
this.getUserStatus();
}
displayFirstName(){
  return this.firstName;
}

getUserStatus(){
 this.status=false;
}


onSubmit(theForm: NgForm){
  console.log(theForm);
  
}

}
