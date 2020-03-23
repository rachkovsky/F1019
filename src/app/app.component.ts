import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  title = 'Ololo';
  list = ['Angular','React','Vue'];
  isVisible = true;


  clickHandler() {
    console.log('parent');
  }
}
