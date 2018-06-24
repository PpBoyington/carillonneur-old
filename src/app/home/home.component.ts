import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  public title = 'Carillonneur Edition';

  constructor() {
  }

  ngOnInit() {

  }

  someMethod() {
    this.trigger.openMenu();
  }
}
