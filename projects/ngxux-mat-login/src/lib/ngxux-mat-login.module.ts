import { NgModule }                                            from '@angular/core';
import { ReactiveFormsModule }                                 from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AutofocusDirective }                                  from './AutofocusDirective';
import { NgxuxMatLoginComponent }                              from './ngxux-mat-login.component';

@NgModule({

    declarations: [

        AutofocusDirective,

        NgxuxMatLoginComponent

    ],

    imports: [

        ReactiveFormsModule,

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

    ],

    exports: [

        NgxuxMatLoginComponent

    ]

})
export class NgxuxMatLoginModule {
}
