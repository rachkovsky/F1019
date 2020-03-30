import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router: Router) {}

  private user = new BehaviorSubject('guest');
  public user$ = this.user.asObservable();


  changeRole(role) {
    this.user.next(role);
  }

  isAdmin() {
    if (this.user.getValue() === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  loginUser(data) {
    if (data && data.user === 'admin' && data.pass === 'admin') {
      this.user.next('admin');
      this.router.navigate(['/admin']);
    }
  }


}
