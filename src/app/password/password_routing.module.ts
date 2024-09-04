import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PasswordModule } from './password.module';

import * as passwordContainers from './containers';

export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: passwordContainers.ContainerComponent
    }
];

@NgModule({
    imports: [PasswordModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class PasswordRoutingModule {}