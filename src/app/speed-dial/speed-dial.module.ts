import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SpeedDialMenuComponent } from './speed-dial-menu/speed-dial-menu.component';
import { SpeedDialMenuItemComponent } from './speed-dial-menu-item/speed-dial-menu-item.component';
import {
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { SpeedDialMenuMainComponent } from './speed-dial-menu-main/speed-dial-menu-main.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    SpeedDialMenuComponent,
    SpeedDialMenuItemComponent,
    SpeedDialMenuMainComponent,
  ],
  exports: [
    SpeedDialMenuComponent,
    SpeedDialMenuItemComponent,
    SpeedDialMenuMainComponent
  ]
})
export class SpeedDialModule { }
