import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { App, Quicklink } from '../header/types';

@Component({
  selector: 'app-header-dropdown-links',
  templateUrl: './header-dropdown-links.component.html',
  standalone: true,
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterModule],
})
export class HeaderDropdownLinksComponent {
  @Input() apps: App[];
  @Input() quicklinks: Quicklink[];
}
