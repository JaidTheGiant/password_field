import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private types = {
    numbers: /\d/,
    letters: /[a-zA-Z]/,
    symbols: /[^\w\s]/,
  }

  constructor() { }

  validatePassword(password: string): string {
    if (!password || password.length == 0){
      return '';
    }
    if (password && password.length < 8){
      return 'Password is too short';
    }

    let hasNumbers = this.types.numbers.test(password);
    let hasLetters = this.types.letters.test(password);
    let hasSymbols = this.types.symbols.test(password);

    return (hasNumbers && hasLetters && hasSymbols)?'Password is strong':
              (hasNumbers && hasLetters) || (hasNumbers && hasSymbols) || (hasLetters && hasSymbols)?'Password is medium':
                (hasNumbers || hasLetters || hasSymbols)?'Password is easy':'Password is empty';
  }
}
