import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {TablerIconsModule} from 'angular-tabler-icons';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {NavService} from 'src/app/services/nav.service';

@Component({
  selector: 'app-horizontal-nav-item',
  standalone: true,
  imports: [TablerIconsModule, CommonModule, MatIconModule, TranslateModule],
  templateUrl: './horizontal-nav-item.component.html',
})
export class AppHorizontalNavItemComponent {
  @Input() depth: any;
  @Input() item: any;

  constructor(
    public navService: NavService,
    public router: Router,
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  onItemSelected(item: any) {
    if (!item?.children.length) {
      this.router.navigate([item.route]);
    }
  }
}
