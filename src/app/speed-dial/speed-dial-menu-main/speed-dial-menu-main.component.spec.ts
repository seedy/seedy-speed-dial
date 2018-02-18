import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedDialMenuMainComponent } from './speed-dial-menu-main.component';

describe('SpeedDialMenuMainComponent', () => {
  let component: SpeedDialMenuMainComponent;
  let fixture: ComponentFixture<SpeedDialMenuMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedDialMenuMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedDialMenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
