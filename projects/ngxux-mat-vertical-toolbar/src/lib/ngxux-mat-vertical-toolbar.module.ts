import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { MatIconModule, MatTooltipModule }  from '@angular/material';
import { RouterModule }                     from '@angular/router';
import { NgxuxMatVerticalToolbarComponent } from './ngxux-mat-vertical-toolbar.component';

@NgModule({

    declarations: [

        NgxuxMatVerticalToolbarComponent

    ],

    imports: [

        CommonModule,
        RouterModule,

        MatIconModule,
        MatTooltipModule

    ],

    exports: [

        NgxuxMatVerticalToolbarComponent

    ]

})
export class NgxuxMatVerticalToolbarModule {
}
