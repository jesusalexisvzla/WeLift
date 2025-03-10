import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'content1',
        pathMatch: 'full'
    },
    {
        path: 'content1',
        component: Content1Component,
    },
    {
        path: 'content2',
        component: Content2Component,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ComponentsRoutingModule { }