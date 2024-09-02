import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import * as passwordContainers from './containers';
import * as passwordComponents from  './components';
import * as passwordServices from './services';

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
    ],
    providers: [
        ...passwordServices.services
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