import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges, OnDestroy {

  @Input() list: any[string];
  @Output() clicked = new EventEmitter<any>();

  hostClass = true; 

  @HostListener('click') onClick() {
    console.log('click');
  }

  constructor(private todo: TodosService) { }

  ngOnChanges(changes): void {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.hostClass = false;
    },500)
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  onButtonClick() {
    this.todo.addCount();
  }

}
