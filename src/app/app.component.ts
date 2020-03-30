import { Component } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userStatus;
  buttonLabel: string;

  constructor(private user: UserService){
    user.user$.subscribe((user) => {
      console.log('------ ', user);
      this.userStatus = user;
      if (this.userStatus === 'admin') {
        this.buttonLabel = 'logout';
      } else {
        this.buttonLabel = 'login';
      }
    })
  }

  login() {
    if (this.userStatus === 'admin') {
      this.user.changeRole('guest');
      
    } else {
      this.user.changeRole('admin');
    }
  }

  // title = 'Ololo';
  // list = ['Angular','React','Vue'];
  // isVisible = true;






  clickHandler() {
    console.log('parent');
  }
}
