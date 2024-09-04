import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

    @ViewChild('password_message') message!: ElementRef;
    @ViewChildren('strength_level') levels!: QueryList<any>;

    constructor(private passwordService: PasswordService){};

    // Funtion that changes UI of strength line.
    // Holds references of label and array of strength levels to be able to change their attributes
    ngOnInit(){
      this.passwordService.passwordStrength.subscribe(value => {
        switch (value) {

          // visual separation between cases
          case 'Password is too short':
            this.changeStrengthAppearance(value, this.colors.RED);
            break;

          // visual separation between cases
          case 'Password is easy':
            this.changeStrengthAppearance(value, this.colors.RED, false, [0])
            break;

          // visual separation between cases
          case 'Password is medium':
            this.changeStrengthAppearance(value, this.colors.YELLOW, false, [0, 1])
            break;

          // visual separation between cases
          case 'Password is strong':
            this.changeStrengthAppearance(value, this.colors.GREEN);
            break;

          // visual separation between cases
          default:
            this.changeStrengthAppearance(value, this.colors.GRAY);
            this.message.nativeElement.classList.add('invisible', 'collapse');
            break;
        }
      })
    }

    private changeStrengthAppearance(value: string, color: string, applyToAll: boolean = true, specificLevels?: number[]){
      this.message.nativeElement.classList.remove('invisible', 'collapse');
      this.message.nativeElement.style.color = color;
      this.message.nativeElement.textContent = value;
      this.levels.forEach((level, index) => 
        {
          if(applyToAll || (specificLevels && specificLevels.includes(index))){
            level.nativeElement.style.backgroundColor = color;
          }else{
            level.nativeElement.style.backgroundColor = this.colors.GRAY;
          }
        })        
    }
}
