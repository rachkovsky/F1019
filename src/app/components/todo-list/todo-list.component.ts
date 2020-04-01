import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnChanges {

  constructor(private todos: TodosService) {

  }

  list: [any];

  ngOnChanges(changes): void {
    // console.log('++++++ ', changes);
  }

  ngOnInit(): void {
    this.todos.getTodos().subscribe((res: [any]) => {
      this.list = res;
    },
    (err) => {
      console.log(err);
    },
    () => {
      console.log('complete');
    });
  }

}
