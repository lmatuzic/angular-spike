import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {Profile} from 'src/app/layouts/components/header/types';
import {MaterialModule} from 'src/app/material.module';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  standalone: true,
  imports: [CommonModule, MaterialModule, NgScrollbarModule, RouterModule],
})
export class ProfileDropdownComponent {
  @Input() profiles: Profile[] = [];
}
