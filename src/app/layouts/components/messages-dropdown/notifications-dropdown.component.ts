import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {TablerIconsModule} from 'angular-tabler-icons';
import {MaterialModule} from 'src/app/material.module';
import {Notification} from '../header/types';

@Component({
  selector: 'app-notifications-dropdown',
  templateUrl: './notifications-dropdown.component.html',
  standalone: true,
  imports: [CommonModule, MaterialModule, TablerIconsModule],
})
export class NotificationsDropdownComponent {
  @Input() notifications: Notification[] = [];
}
