import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../structure/material/material.module';

import { Content1Component } from './content1/content1.component';
import { Content1ModalComponent } from './content1/content1-modal/content1-modal.component';
import { Content2Component } from './content2/content2.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { BookNowComponent } from './book-now/book-now.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        Content1Component,
        Content1ModalComponent,
        Content2Component,
        HowItWorksComponent,
        BookNowComponent,
    ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    entryComponents: [
    ]
})
export class ComponentsModule { }