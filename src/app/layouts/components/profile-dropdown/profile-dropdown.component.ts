import { profiles } from "./../header/constants";
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule } from "@angular/router";
import { TablerIconsModule } from "angular-tabler-icons";
import { NgScrollbarModule } from "ngx-scrollbar";
import { MaterialModule } from "src/app/material.module";

@Component({
  selector: "app-profile-dropdown",
  templateUrl: "./profile-dropdown.component.html",
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    NgScrollbarModule,
    TablerIconsModule,
    RouterModule,
  ],
})
export class ProfileDropdownComponent {
  @Input() profiles = profiles;
}
