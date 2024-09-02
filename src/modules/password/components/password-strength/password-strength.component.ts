import { Component } from '@angular/core';
import * as colorSet from '../../../../color_set';

@Component({
  selector: 'app-password-strength',
  standalone: false,
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent {
    colors = colorSet;
}
