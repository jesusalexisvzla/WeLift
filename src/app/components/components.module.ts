import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../structure/material/material.module';

import { Content1Component } from './content1/content1.component';
import { Content1ModalComponent } from './content1/content1-modal/content1-modal.component';
import { Content2Component } from './content2/content2.component';

@NgModule({
    declarations: [
        Content1Component,
        Content1ModalComponent,
        Content2Component,
    ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        MaterialModule
    ],
    entryComponents: [
    ]
})
export class ComponentsModule { }