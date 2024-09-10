import {Component, HostBinding, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from 'src/app/material.module';
import {CommonModule} from '@angular/common';
import {NavService} from 'src/app/services/nav.service';
import {AppHorizontalNavItemComponent} from '../horizontal-nav-item/horizontal-nav-item.component';
import {NavItem} from './types';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [TranslateModule, MaterialModule, CommonModule, AppHorizontalNavItemComponent],
  templateUrl: './nav-item.component.html',
  styleUrls: [],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class AppNavItemComponent implements OnChanges {
  @Output() toggleMobileLink = new EventEmitter<void>();
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isHorizontal = false;

  expanded: any = false;
  disabled: any = false;
  twoLines: any = false;

  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem | any;
  @Input() depth: any;

  constructor(
    public navService: NavService,
    public router: Router,
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnChanges() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.startsWith(`/${this.item.route}`);
        this.ariaExpanded = this.expanded;
        //console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children?.length) {
      this.router.navigate([item.route]);
    }

    if (item.children?.length) {
      this.expanded = !this.expanded;
    }

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (!this.expanded) {
      if (window.innerWidth < 1024) {
        this.notify.emit();
      }
    }
  }

  onSubItemSelected(item: NavItem) {
    if (!item.children?.length) {
      if (this.expanded && window.innerWidth < 1024) {
        this.notify.emit();
      }
    }
  }
}
