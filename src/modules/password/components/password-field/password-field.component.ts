import { Component } from '@angular/core';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-field',
  standalone: false,
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css'
})
export class PasswordFieldComponent {
  password: string = '';

  constructor(private passwordService: PasswordService){};

  checkPassword(){
    console.log(this.password);
    this.passwordService.validatePassword(this.password);
  }
}
