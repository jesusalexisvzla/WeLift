import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BookNowComponent } from './book-now/book-now.component';

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
    },
    {
        path: 'how-it-works',
        component: HowItWorksComponent,
    },
    {
        path: 'book-now',
        component: BookNowComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }