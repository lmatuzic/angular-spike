import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { App, Quicklink } from "../header/types";
import { RouterLink } from "@angular/router";
import { AppSettings } from "src/app/config";

@Component({
  selector: "app-mobile-sidebar",
  templateUrl: "./mobile-sidebar.component.html",
  standalone: true,
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterLink],
})
export class MobileSidebarComponent {
  @Input() options: AppSettings;
  @Input() apps: App[] = [];
  @Input() quicklinks: Quicklink[] = [];
  @Output() toggleSidebar = new EventEmitter<void>();

  closeSidebar() {
    this.toggleSidebar.emit();
  }
}
