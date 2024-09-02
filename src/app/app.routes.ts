import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/password',
    },
    {
        path: 'password',
        loadChildren: () => 
            import('../modules/password/password_routing.module').then(m => m.PasswordRoutingModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
