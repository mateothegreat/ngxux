import { CommonModule }                   from '@angular/common';
import { NgModule }                       from '@angular/core';
import { MatButtonModule, MatTabsModule } from '@angular/material';
import { RouterModule }                   from '@angular/router';
import { NgxuxMatHeaderNavComponent }     from './ngxux-mat-header-nav.component';

@NgModule({

    declarations: [

        NgxuxMatHeaderNavComponent

    ],

    imports: [

        CommonModule,
        MatButtonModule,
        MatTabsModule,
        RouterModule

    ],

    exports: [

        NgxuxMatHeaderNavComponent

    ]

})
export class NgxuxMatHeaderNavModule {
}
