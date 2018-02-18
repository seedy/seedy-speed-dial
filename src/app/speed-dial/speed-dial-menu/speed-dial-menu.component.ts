import {
  AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, HostListener, Input, OnInit, QueryList, Renderer2, Self,
  ViewChild
} from '@angular/core';
import {SpeedDialMenuItemComponent} from '../speed-dial-menu-item/speed-dial-menu-item.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SpeedDialMenuMainComponent} from '../speed-dial-menu-main/speed-dial-menu-main.component';

@Component({
  selector: 'ssd-speed-dial-menu',
  templateUrl: './speed-dial-menu.component.html',
  styleUrls: ['./speed-dial-menu.component.scss'],
  animations: [
    trigger('flingOut', [
      state('visible', style({transform: 'translate(0, 0)'})),
      transition('void => *', [
        style({transform: 'translate({{xAxis}}, {{yAxis}})'}),
        animate(100)
      ], {params: {xAxis: 0, yAxis: 0}}),
      transition('* => void', [
        animate(100, style({transform: 'translate({{xAxis}}, {{yAxis}})'}))
      ])
    ])
  ]
})
export class SpeedDialMenuComponent implements OnInit, AfterContentInit {

  private _mode: 'mouseenter' | 'click';

  @Input() direction?: 'top' | 'bottom' | 'left' | 'right' = 'bottom';
  @Input() set mode(mode: 'hover' | 'click') {
    if (mode === 'hover') {
      this._mode = 'mouseenter';
    } else {
      this._mode = mode;
    }
  }

  @ContentChild(SpeedDialMenuMainComponent) main: SpeedDialMenuMainComponent;
  @ContentChildren(SpeedDialMenuItemComponent) items: QueryList<SpeedDialMenuItemComponent>;

  public menuOpen = false;

  public xAxis: string;
  public yAxis: string;
  public layoutAxis: 'row' | 'column';

  private listener: () => void;

  constructor(
    @Self() private selfRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.getTransformAxes();
    this.getLayoutAxis();
  }

  ngAfterContentInit() {
    this.watchItems();
  }

  public toggle(event: MouseEvent): void {
    event.stopPropagation();
    if (event.type !== this._mode) {
      return;
    }
    if (this.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  public getLayoutAxis(): void {
    if (this.direction === 'top' || this.direction === 'bottom') {
      this.layoutAxis = 'column';
    } else if (this.direction === 'left' || this.direction === 'right') {
      this.layoutAxis = 'row';
    }
  }

  public getTransformAxes(): void {
    if (this.direction === 'top' || this.direction === 'bottom') {
      this.xAxis = '0';
      this.yAxis = '100%';
      if (this.direction === 'bottom') {
        this.yAxis = '-100%';
      }
    } else if (this.direction === 'left' || this.direction === 'right') {
      this.yAxis = '0';
      this.xAxis = '100%';
      if (this.direction === 'right') {
        this.xAxis = '-100%';
      }
    }
  }

  private watchItems(): void {
    this.items.forEach((item: SpeedDialMenuItemComponent) => {
      item.click.subscribe(() => {
        this.closeMenu();
      });
    });
  }

  private closeMenu(): void {
    this.menuOpen = false;
    this.listener();
  }

  private openMenu(): void {
    this.menuOpen = true;
    this.watchOutsideAction();
  }

  private watchOutsideAction(): void {
    setTimeout(() => {
      if (this._mode === 'click') {
        this.listener = this.renderer.listen('document', 'click', (event: any) => {
          this.closeMenu();
        });
      } else {
        this.listener = this.renderer.listen(this.selfRef.nativeElement, 'mouseleave', (event: any) => {
          this.closeMenu();
        });
      }

    }, 0);
  }
}
