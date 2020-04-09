import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, take, switchMap, switchAll, mergeAll, concatMap, mergeMap, exhaustMap, concatAll, exhaust, distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  public filterForm = this.fb.group({
    brand: [''],
    price: ['']
  });



  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    this.filterForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged((a,b) => JSON.stringify(a) === JSON.stringify(b) ),
      switchMap(() => this.getData(this.filterForm.value)),
      take(3),
    )
    .subscribe((res) => {
      console.log(res);
    })
  }

  getData(data) {
    return this.http.post('/api/form', data);
  }


}
