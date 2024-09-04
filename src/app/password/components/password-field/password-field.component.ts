import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
// import { PasswordService } from '../../services/password.service';
import { Password } from '../../interfaces/password.interface';

@Component({
  selector: 'app-password-field',
  standalone: false,
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css'
})
export class PasswordFieldComponent {
  // Variable which holds entered password. Should be public to ensure NgModel working correctly.
  password: string = '';

  @ViewChild('password_field') password_field!: ElementRef;
  @ViewChild('show_hide_image') button_image!: ElementRef;

  constructor(@Inject('Password') private passwordService: Password){};
  // Call for service function to check entered password
  checkPassword(){
    this.passwordService.validatePassword(this.password);
  }

  // Function that changes visibility of password field. Also changes image on button
  changePasswordVisibility(){
    if(this.password_field.nativeElement.type == 'password'){
      this.password_field.nativeElement.type = 'input';
      this.button_image.nativeElement.src = 'assets/hide.png';
    }else{
      this.password_field.nativeElement.type = 'password';
      this.button_image.nativeElement.src = 'assets/show.png';
    }
  }
}
