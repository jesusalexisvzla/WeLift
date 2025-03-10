import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import { LoginComponent } from './login.component';

export const routes: Routes = [
    {
        path: '', 
        component: LoginComponent,
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class LoginRoutingModule { }