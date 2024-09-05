import {
  Component,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { CoreService } from "src/app/services/core.service";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { navItems } from "../sidebar/nav-item/constants";
import { SearchDialogComponent } from "../../../shared/components/search-dialog/search-dialog.component";
import { Language } from "./types";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { RouterModule } from "@angular/router";
import { TablerIconsModule } from "angular-tabler-icons";
import { NgScrollbarModule } from "ngx-scrollbar";
import { MaterialModule } from "src/app/material.module";
import { LanguageSelectorComponent } from "src/app/shared/components/language-selector/language-selector.component";
import { HeaderDropdownLinksComponent } from "../header-dropdown-links/header-dropdown-links.component";
import { profiles, notifications, apps, quicklinks } from "./constants";
import { BrandingComponent } from "../branding/branding.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    MaterialModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    LanguageSelectorComponent,
    HeaderDropdownLinksComponent,
    BrandingComponent,
  ],
})
export class HeaderComponent implements OnChanges {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Input() isHorizontal = true;

  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();

  searchText: string = "";
  navItems = navItems;
  navItemsData = navItems.filter((navitem) => navitem.displayName);
  showFiller = false;
  profiles = profiles;
  notifications = notifications;
  apps = apps;
  quicklinks = quicklinks;

  public selectedLanguage: Language = {
    language: "English",
    code: "en",
    type: "US",
    icon: "/assets/images/flag/icon-flag-en.svg",
  };

  public languages: Language[] = [
    {
      language: "English",
      code: "en",
      type: "US",
      icon: "/assets/images/flag/icon-flag-en.svg",
    },
    {
      language: "Español",
      code: "es",
      type: "ES",
      icon: "/assets/images/flag/icon-flag-es.svg",
    },
    {
      language: "Français",
      code: "fr",
      type: "FR",
      icon: "/assets/images/flag/icon-flag-fr.svg",
    },
    {
      language: "German",
      code: "de",
      type: "DE",
      icon: "/assets/images/flag/icon-flag-de.svg",
    },
  ];

  constructor(
    protected coreService: CoreService,
    public dialog: MatDialog,
    protected translate: TranslateService
  ) {
    translate.setDefaultLang("en");
  }

  changeLanguage(lang: Language) {
    this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["isHorizontal"]) {
      console.log("Header isHorizontal (ngOnChanges):", this.isHorizontal);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(SearchDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  handleToggle() {
    if (this.showToggle) {
      this.toggleCollapsed.emit();
    } else {
      this.toggleMobileNav.emit();
    }
  }
}
