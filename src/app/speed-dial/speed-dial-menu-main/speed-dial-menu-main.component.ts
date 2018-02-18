import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SpeedDialMenuItemComponent} from '../speed-dial-menu-item/speed-dial-menu-item.component';

@Component({
  selector: 'ssd-speed-dial-menu-main',
  templateUrl: './speed-dial-menu-main.component.html',
  styleUrls: ['./speed-dial-menu-main.component.scss']
})
export class SpeedDialMenuMainComponent extends SpeedDialMenuItemComponent {

  constructor() {
    super();
  }

}
