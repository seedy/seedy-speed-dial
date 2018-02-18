import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedDialMenuItemComponent } from './speed-dial-menu-item.component';

describe('SpeedDialMenuItemComponent', () => {
  let component: SpeedDialMenuItemComponent;
  let fixture: ComponentFixture<SpeedDialMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedDialMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedDialMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
