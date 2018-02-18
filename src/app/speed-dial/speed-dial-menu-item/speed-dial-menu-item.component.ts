import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ssd-speed-dial-menu-item',
  templateUrl: './speed-dial-menu-item.component.html',
  styleUrls: ['./speed-dial-menu-item.component.scss']
})
export class SpeedDialMenuItemComponent implements OnInit {

  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() {
  }

  public onClick(event: MouseEvent): void {
    event.stopPropagation();
    this.click.emit(event);
  }

}
