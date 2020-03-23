import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() list: any[string];
  @Output() clicked = new EventEmitter<any>();

  constructor(private todo: TodosService) { }

  ngOnInit(): void {
    console.log(this.list);
  }

  onButtonClick() {
    // this.clicked.emit('some value');
    this.todo.addCount();
  }

}
