import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todos: TodosService) { }

  list: [any];

  ngOnInit(): void {
    this.todos.getTodos().subscribe((res: [any]) => {
      this.list = res;
      console.log(res);
    });
    
  }

}
