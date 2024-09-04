import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-mobile-menu-button',
  templateUrl: './mobile-menu-button.component.html',
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class MobileMenuButtonComponent {
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
}
