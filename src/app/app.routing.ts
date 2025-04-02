
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';  
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '',      loadChildren: () => import('./structure/structure.module').then(m => m.StructureModule)},
  { path: 'login', loadChildren: () => import('./structure/login/login.module').then(m => m.LoginModule) },
  // { path: '**', redirectTo: '' },
]; 

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }