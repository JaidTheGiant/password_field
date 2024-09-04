import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Password } from '../interfaces/password.interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordService implements Password {
  // Regular expresions to find numbers, letters and special symbols in password
  private types = {
    numbers: /\d/,
    letters: /[a-zA-Z]/,
    symbols: /[^\w\s]|_/,
  }

  // Constant that holds minimal length of password
  private MIN_PASS_LNG = 8;

  // Variable which contains current password entered
  private passwordStrengthSubject = new Subject<string>();

  // Variable which allows other components subscribe and track any changes with current password entered
  passwordStrength = this.passwordStrengthSubject.asObservable();

  constructor() { }

  // Validation function which checks every possible password state:
  // 1) password field is empty
  // 2) password is too short
  // 3) password is easy
  // 4) password is medium
  // 5) password is strong
  // By default required length of password set to 8
  validatePassword(password: string){
    let result = 'Password is empty';
    if (!password || password.length == 0){
      result = 'Password is empty';
      this.passwordStrengthSubject.next(result);
      return
    }
    if (password && password.length < this.MIN_PASS_LNG){
      result = 'Password is too short';
      this.passwordStrengthSubject.next(result);
      return
    }

    let hasNumbers = this.types.numbers.test(password);
    let hasLetters = this.types.letters.test(password);
    let hasSymbols = this.types.symbols.test(password);

    result = (hasNumbers && hasLetters && hasSymbols)?'Password is strong':
              (hasNumbers && hasLetters) || (hasNumbers && hasSymbols) || (hasLetters && hasSymbols)?'Password is medium':
                (hasNumbers || hasLetters || hasSymbols)?'Password is easy':'Password is empty';

    // Here and before this line pushes new value to variable and fire some events in all subscribed components
    this.passwordStrengthSubject.next(result);
  }
}
