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
import { NavService } from "src/app/services/nav.service";
import { MediaMatcher } from "@angular/cdk/layout";
import { AppHorizontalNavItemComponent } from "../horizontal-nav-item/horizontal-nav-item.component";
import { AppNavItemComponent } from "../nav-item/nav-item.component";
import { BrandingComponent } from "src/app/shared/components/branding/branding.component";

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
    AppHorizontalNavItemComponent,
    AppNavItemComponent,
    BrandingComponent,
  ],
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent {
  @Input() isHorizontal: boolean;
  @Input() showToggle: boolean;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  parentActive = "";

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    public navService: NavService,
    public router: Router,
    media: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef
  ) {
    this.isHorizontal = false; // initialize isHorizontal property
    this.mobileQuery = media.matchMedia("(min-width: 1100px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
    this.router.events.subscribe(
      () => (this.parentActive = this.router.url.split("/")[1])
    );
  }
}
