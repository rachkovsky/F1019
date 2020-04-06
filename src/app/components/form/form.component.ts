import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map, switchMap } from 'rxjs/operators';



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
      switchMap((changes) => {
          return this.getData(this.filterForm.value)
      })
    )
    .subscribe((res) => {
      console.log(res);
    })
  }

  getData(data) {
    return this.http.post('/api/form', data);
  }


}
