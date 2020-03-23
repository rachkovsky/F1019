import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }


  public counter$ = new BehaviorSubject(null);
  count = 0;

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  addCount() {
    this.count++
    this.counter$.next(this.count);
  }



}
