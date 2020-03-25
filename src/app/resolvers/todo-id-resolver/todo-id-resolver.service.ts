import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError,  } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import  { ITodo }  from '../../interfaces/todo';



@Injectable({
  providedIn: 'root'
})
export class TodoIdResolverService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot,): Observable<ITodo> {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${route.params.id}`).pipe(
      map((response) => {
        // throw Error('Something went wrong');  
        return response;
      }),
      catchError((error) => {
        console.log('-----', error)
        return of(null);
      })
    );

  }
}
