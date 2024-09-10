import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MaterialModule} from 'src/app/material.module';

@Component({
  selector: 'app-shortcuts-dropdown',
  templateUrl: './shortcuts-dropdown.component.html',
  standalone: true,
  imports: [RouterModule, MaterialModule],
})
export class ShortcutsDropdownComponent {}
