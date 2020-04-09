import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  @Input() items: any[];

  @ContentChild('tpl', {static: false}) itemTemplateRef: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {

  }

}
