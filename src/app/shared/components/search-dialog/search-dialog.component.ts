import {navItems} from '../../../layouts/components/nav-item/constants';
import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {NavItem} from 'src/app/layouts/components/nav-item/types';
import {MaterialModule} from 'src/app/material.module';

@Component({
  selector: 'search-dialog',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, NgScrollbarModule],
  templateUrl: 'search-dialog.component.html',
})
export class SearchDialogComponent {
  @Input() navItems: NavItem[];
  searchText: string = '';

  navItemsData = navItems.filter((navitem) => navitem.displayName);
}
