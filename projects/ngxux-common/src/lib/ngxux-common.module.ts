import { CommonModule }       from '@angular/common';
import { NgModule }           from '@angular/core';
import { AutofocusDirective } from './AutofocusDirective';

@NgModule({

    declarations: [

        AutofocusDirective,

    ],

    imports: [

        CommonModule

    ],

    exports: [

        AutofocusDirective

    ]

})
export class NgxuxCommonModule {
}
