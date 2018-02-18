import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssd-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public toto(): void {
    console.log('toto');
  }

}
