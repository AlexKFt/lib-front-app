import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./authorization/authorization.component').then(
            m => m.AuthorizationComponent
        )
    }
},
{
    path: 'login',
    loadComponent: () => {
        return import('./login-page/login-page.component').then(
            m => m.LoginPageComponent
        )
    }
},
{
    path: 'showcase',
    loadComponent: () => {
        return import('./home/home.component').then(
            m => m.HomeComponent
        )
    }
}];
