import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import  { ITodo }  from '../../interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
  
  todo: ITodo;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
    this.todo = this.route.snapshot.data.todo;
  
  }

}
