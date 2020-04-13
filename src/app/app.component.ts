import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from './services/user/user.service';
import { TodosService } from './services/todos/todos.service';
import { ListComponent } from '../app/components/list/list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(ListComponent) listCmp;

  values$: any;

  constructor(private service: TodosService){

  }

  ngOnInit() {
    // this.listCmp.doSomething();
    this.values$ = this.service.getCounter();
  }

  add() {
    this.service.addToCounter();
    // this.values.push('Backbone');
  }

  ngAfterViewInit() {
    // 
    this.listCmp.doSomething();
  }

}
