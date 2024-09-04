import { Observable } from "rxjs";

export interface Password {
    passwordStrength: Observable<string>;

    validatePassword(password:string): any;
}
