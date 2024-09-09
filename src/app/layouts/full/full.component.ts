import { quicklinks } from "./../components/header/constants";
import { BreakpointObserver, MediaMatcher } from "@angular/cdk/layout";
import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { Subscription } from "rxjs";
import { MatSidenav, MatSidenavContent } from "@angular/material/sidenav";
import { CoreService } from "src/app/services/core.service";
import { AppSettings } from "src/app/config";
import { filter } from "rxjs/operators";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { navItems } from "../components/nav-item/constants";
import { NavService } from "../../services/nav.service";
import { MaterialModule } from "src/app/material.module";
import { CommonModule } from "@angular/common";
import { NgScrollbarModule } from "ngx-scrollbar";
import { TablerIconsModule } from "angular-tabler-icons";
import { AppBreadcrumbComponent } from "../components/breadcrumb/breadcrumb.component";
import { HeaderComponent } from "../components/header/header.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { AppNavItemComponent } from "../components/nav-item/nav-item.component";
import { apps } from "./constants";
import { MobileSidebarComponent } from "../components/mobile-sidebar/mobile-sidebar.component";
import { CustomizerComponent } from "src/app/layouts/components/customizer/customizer.component";

const MOBILE_VIEW = "screen and (max-width: 768px)";
const TABLET_VIEW = "screen and (min-width: 769px) and (max-width: 1024px)";
const MONITOR_VIEW = "screen and (min-width: 1024px)";
const BELOWMONITOR = "screen and (max-width: 1023px)";

@Component({
  selector: "app-full",
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    CommonModule,
    SidebarComponent,
    NgScrollbarModule,
    TablerIconsModule,
    HeaderComponent,
    SidebarComponent,
    AppBreadcrumbComponent,
    AppNavItemComponent,
    MobileSidebarComponent,
    CustomizerComponent,
  ],
  templateUrl: "./full.component.html",
  styleUrls: [],
  encapsulation: ViewEncapsulation.None,
})
export class FullComponent {
  navItems = navItems;

  @ViewChild("leftsidenav") public sidenav!: MatSidenav;
  resView = false;
  @ViewChild("content", { static: true }) content!: MatSidenavContent;
  //get options from service
  options = this.coreService.getOptions();
  private layoutChangesSubscription = Subscription.EMPTY;
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  apps = apps;
  quicklinks = quicklinks;

  get isMobileScreenResolution(): boolean {
    return this.isMobileScreen;
  }

  get isTablet(): boolean {
    return this.resView;
  }

  constructor(
    private coreService: CoreService,
    private mediaMatcher: MediaMatcher,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private navService: NavService
  ) {
    this.htmlElement = document.querySelector("html")!;
    this.layoutChangesSubscription = this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW, BELOWMONITOR])
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes
        this.options.sidenavOpened = true;
        this.isMobileScreen = state.breakpoints[BELOWMONITOR];

        if (!this.options.sidenavCollapsed) {
          this.options.sidenavCollapsed = state.breakpoints[TABLET_VIEW];
        }

        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
        this.resView = state.breakpoints[BELOWMONITOR];
      });

    // Initialize project theme with options
    this.receiveOptions(this.options);

    // This is for scroll to top
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        this.content.scrollTo({ top: 0 });
      });
  }

  ngOnDestroy() {
    this.layoutChangesSubscription.unsubscribe();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
    this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
    this.resetCollapsedState();
  }

  resetCollapsedState(timer = 400) {
    setTimeout(() => this.coreService.setOptions(this.options), timer);
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isMobileScreenResolution;
    this.options.sidenavOpened = isOpened;
    this.coreService.setOptions(this.options);
  }

  receiveOptions(options: AppSettings): void {
    this.options = options;
    this.toggleDarkTheme(options);
  }

  toggleDarkTheme(options: AppSettings) {
    if (options.theme === "dark") {
      this.htmlElement.classList.add("dark-theme");
      this.htmlElement.classList.remove("light-theme");
    } else {
      this.htmlElement.classList.remove("dark-theme");
      this.htmlElement.classList.add("light-theme");
    }
  }
}
