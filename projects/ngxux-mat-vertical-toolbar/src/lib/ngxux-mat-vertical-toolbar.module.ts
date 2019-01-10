import { CommonModule }                     from '@angular/common';
import { NgModule }                         from '@angular/core';
import { MatIconModule }                    from '@angular/material';
import { RouterModule }                     from '@angular/router';
import { NgxuxMatVerticalToolbarComponent } from './ngxux-mat-vertical-toolbar.component';

@NgModule({

    declarations: [

        NgxuxMatVerticalToolbarComponent

    ],

    imports: [

        CommonModule,
        RouterModule,

        MatIconModule

    ],

    exports: [

        NgxuxMatVerticalToolbarComponent

    ]

})
export class NgxuxMatVerticalToolbarModule {
}
