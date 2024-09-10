import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {MaterialModule} from 'src/app/material.module';
import {Notification} from '../header/types';

@Component({
  selector: 'app-notifications-dropdown',
  templateUrl: './notifications-dropdown.component.html',
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class NotificationsDropdownComponent {
  @Input() notifications: Notification[] = [];
}
