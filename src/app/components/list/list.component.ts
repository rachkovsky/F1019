import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef, ContentChild, TemplateRef, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, DoCheck {

  @Input() list: any;
  @ContentChild('temp', {static: false}) itemTemplateRef: TemplateRef<any>

  arr = [];

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  doSomething() {
    console.log('ololo');
  }

  ngDoCheck() {
    // if (this.currentList.length !== this.list.length) {
    //   this.cd.detectChanges();
    // }
    // this.currentList = [...this.list];
  }

  
}
