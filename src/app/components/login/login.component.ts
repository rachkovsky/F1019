import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required, Validators.minLength(2)]),
      pass: new FormControl('', [Validators.required, Validators.maxLength(16)]),
    });

    this.subscription = this.loginForm.valueChanges.subscribe((changes) => {
      console.log('---- ', changes);
    })
  }

  submit() {
    if (this.loginForm.valid) {
      this.userService.loginUser(this.loginForm.value);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
