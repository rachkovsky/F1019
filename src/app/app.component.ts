import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userStatus;
  buttonLabel: string;

  values: any[];

  constructor(private user: UserService){
    user.user$.subscribe((user) => {
      this.userStatus = user;
      if (this.userStatus === 'admin') {
        this.buttonLabel = 'logout';
      } else {
        this.buttonLabel = 'login';
      }
    })
  }

  ngOnInit() {
    let arr = [];
    setInterval(() => {
      arr.push(Math.random());
      this.values = arr;
    }, 2000);
  }

  login() {
    if (this.userStatus === 'admin') {
      this.user.changeRole('guest');
      
    } else {
      this.user.changeRole('admin');
    }
  }

  clickHandler() {
    console.log('parent');
  }
}
