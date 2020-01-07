
import { model, TodoItems } from './Model/model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todotask';
  newTaskName: string = '';

  model = new model();
  //return userame    
  getName() {
    return this.model.user;
  }
  getTodoItems() {
    //return all items
    return this.model.items;

    //return only those items that's done
    //return this . model.items.filter(item=>item.done);
  }
  additem() {
    if (this.newTaskName != "") {
      this.model.items.push(new TodoItems(this.newTaskName, false));
    }
  }
}
