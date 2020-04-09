import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {

  constructor() { }

  items = [
    {
      title: "Title 1",
      content: "Some content 1"
    },
    {
      title: "Title 2",
      content: "Some content 2"
    },
    {
      title: "Title 3",
      content: "Some content 3"
    },
  ];

}
