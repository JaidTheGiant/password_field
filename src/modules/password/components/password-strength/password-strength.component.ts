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
    colors = colorSet;

    constructor(private passwordService: PasswordService){};

    ngOnInit(){
      let message = document.getElementById('password-message');
      let levels = Array.from(document.getElementsByClassName('level'));

      this.passwordService.passwordStrength.subscribe(value => {
        switch (value) {
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
