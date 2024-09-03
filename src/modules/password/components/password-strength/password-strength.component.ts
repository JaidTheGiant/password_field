import { Component } from '@angular/core';
import * as colorSet from '../../../../color_set';
import { PasswordService } from '../../services/password.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: false,
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.css'
})
export class PasswordStrengthComponent implements OnInit{
    // Holds imported color set
    colors = colorSet;

    constructor(private passwordService: PasswordService){};

    // Funtion that changes UI of strength line.
    // Holds references of label and array of strength levels to be able to change their attributes
    //
    // Looks awful
    ngOnInit(){
      let message = document.getElementById('password-message');
      let levels = Array.from(document.getElementsByClassName('level'));

      this.passwordService.passwordStrength.subscribe(value => {
        switch (value) {
          // visual separation between cases
          case 'Password is too short':
            if(message){
              message.classList.remove('invisible', 'collapse');
              message.setAttribute('style', `color: ${this.colors.RED}`);
              message.textContent = value;
            }
            
            if(levels){
              levels.forEach(level => level.setAttribute('style', `background-color: ${this.colors.RED}`))
            }
            break;
          // visual separation between cases
          case 'Password is easy':
            if(message){
              message.classList.remove('invisible', 'collapse');
              message.setAttribute('style', `color: ${this.colors.RED}`);
              message.textContent = value;
            }
            
            if(levels){
              levels.forEach(level => { if(level.id == 'first-level'){
                                          level.setAttribute('style', `background-color: ${this.colors.RED}`)
                                        }else{
                                          level.setAttribute('style', `background-color: ${this.colors.GRAY}`)
                                        } 
                                      }
              )
            }
            break;
          // visual separation between cases
          case 'Password is medium':
            if(message){
              message.classList.remove('invisible', 'collapse');
              message.setAttribute('style', `color: ${this.colors.YELLOW}`);
              message.textContent = value;
            }
            
            if(levels){
              levels.forEach(level => { if(level.id == 'third-level'){
                                          level.setAttribute('style', `background-color: ${this.colors.GRAY}`)
                                        }else{
                                          level.setAttribute('style', `background-color: ${this.colors.YELLOW}`)
                                        } 
                                      }
              )
            }
            break;
          // visual separation between cases
          case 'Password is strong':
            if(message){
              message.classList.remove('invisible', 'collapse');
              message.setAttribute('style', `color: ${this.colors.GREEN}`)
              message.textContent = value;
            }
            if(levels){
              levels.forEach(level => level.setAttribute('style', `background-color: ${this.colors.GREEN}`))
            }
            break;
          // visual separation between cases
          default:
            if(message){
              message.classList.add('invisible', 'collapse');
              message.setAttribute('style', `color: ${this.colors.GRAY}`)
            }
            if(levels){
              levels.forEach(level => level.setAttribute('style', `background-color: ${this.colors.GRAY}`))
            }
            break;
        }
      })
    }
}
