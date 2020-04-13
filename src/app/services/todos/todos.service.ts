import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  arr = [0];
  counter = 0;


  public counter$ = new BehaviorSubject(this.arr);

  getCounter() {
    return this.counter$;
  }


  addToCounter() {
    this.counter++;
    this.arr.push(this.counter);
    this.counter$.next(this.arr);
  }


}
