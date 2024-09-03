import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private types = {
    numbers: /\d/,
    letters: /[a-zA-Z]/,
    symbols: /[^\w\s]|_/,
  }

  private passwordStrengthSubject = new Subject<string>();
  passwordStrength = this.passwordStrengthSubject.asObservable();

  constructor() { }

  validatePassword(password: string){
    let result = 'Password is empty';
    if (!password || password.length == 0){
      result = 'Password is empty';
      this.passwordStrengthSubject.next(result);
      return
    }
    if (password && password.length < 8){
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

    this.passwordStrengthSubject.next(result);
  }
}
