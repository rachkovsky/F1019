import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }


  public counter$ = new ReplaySubject();
  count = 0;

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  addCount() {
    this.count++
    this.counter$.next(this.count);
  }



}
