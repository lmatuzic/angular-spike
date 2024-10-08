import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import {AppSettings} from 'src/app/config';
import {CoreService} from 'src/app/services/core.service';
import {BrandingComponent} from '../../../shared/components/branding/branding.component';
import {MaterialModule} from 'src/app/material.module';
import {FormsModule} from '@angular/forms';
import {NgScrollbarModule} from 'ngx-scrollbar';

@Component({
  selector: 'app-customizer',
  standalone: true,
  imports: [BrandingComponent, MaterialModule, FormsModule, NgScrollbarModule],
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomizerComponent {
  @Output() optionsChange = new EventEmitter<AppSettings>();

  constructor(private coreService: CoreService) {}

  hideSingleSelectionIndicator = signal(true);
  hideMultipleSelectionIndicator = signal(true);

  options = this.coreService.getOptions();

  setLayoutOptions() {
    this.optionsChange.emit(this.options);
  }
}
