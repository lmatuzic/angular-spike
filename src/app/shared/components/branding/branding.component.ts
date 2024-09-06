import { Component } from "@angular/core";
import { CoreService } from "src/app/services/core.service";

@Component({
  selector: "app-branding",
  standalone: true,
  templateUrl: "./branding.component.html",
})
export class BrandingComponent {
  options = this.settings.getOptions();

  constructor(private settings: CoreService) {}
}
