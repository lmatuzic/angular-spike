import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { TablerIconsModule } from "angular-tabler-icons";
import { BrandingComponent } from "../branding/branding.component";
import { NavService } from "src/app/services/nav.service";
import { MediaMatcher } from "@angular/cdk/layout";
import { AppHorizontalNavItemComponent } from "../horizontal-nav-item/horizontal-nav-item.component";
import { navItems } from "./nav-item/constants";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    TablerIconsModule,
    BrandingComponent,
    AppHorizontalNavItemComponent,
  ],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  @Input() isHorizontal: boolean;
  @Input() showToggle: boolean;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  navItems = navItems;
  parentActive = "";

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    public navService: NavService,
    public router: Router,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia("(min-width: 1100px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.router.events.subscribe(
      () => (this.parentActive = this.router.url.split("/")[1])
    );
  }
}
