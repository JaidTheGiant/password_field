import { Component } from '@angular/core';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-field',
  standalone: false,
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css'
})
export class PasswordFieldComponent {
  // Variable which holds entered password. Should be public to ensure NgModel working correctly.
  password: string = '';

  constructor(private passwordService: PasswordService){};
  
  // Call for service function to check entered password
  checkPassword(){
    this.passwordService.validatePassword(this.password);
  }

  // Function that changes visibility of password field. Also changes image on button
  changePasswordVisibility(){
    let password_field = document.getElementById('password_field');
    if(password_field){
      if(password_field.getAttribute('type') == 'password'){
        password_field.setAttribute('type', 'input');
        document.getElementById('show_hide_image')?.setAttribute('src', 'assets/hide.png')
      }else{
        password_field.setAttribute('type', 'password');
        document.getElementById('show_hide_image')?.setAttribute('src', 'assets/show.png')
      }
    }
  }
}
