import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Language } from 'src/app/layouts/components/header/types';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class LanguageSelectorComponent {
  @Input() selectedLanguage: Language;
  @Input() languages: Language[];
  @Output() languageChanged = new EventEmitter<Language>();

  changeLanguage(lang: Language) {
    this.languageChanged.emit(lang);
  }
}
