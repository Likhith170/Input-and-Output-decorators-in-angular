import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentName = "Joe Root"

  users = ['Trent Boult','Devon Conway']

  title = 'angularproject';
  obj = { country: '' };

  addUser(user:string){
    this.users.push(user)
  }
  user ={
    name : 'John Williamson',
    age: 45,
    country:'New Zealand'
  }
  
}