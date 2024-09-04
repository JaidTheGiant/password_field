import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { PasswordService } from "./services/password.service";

import * as passwordContainers from './containers';
import * as passwordComponents from  './components';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
    ],
    providers: [
        { provide: 'Password', useClass: PasswordService}
    ],
    declarations: [
        ...passwordContainers.containers,
        ...passwordComponents.components
    ],
    exports: [
        ...passwordContainers.containers,
        ...passwordComponents.components
    ],
})
export class PasswordModule { }