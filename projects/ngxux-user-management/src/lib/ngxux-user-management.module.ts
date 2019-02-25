import { NgModule }                                                  from '@angular/core';
import { ReactiveFormsModule }                                       from '@angular/forms';
import { MatButtonToggleModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule }                                              from '@angular/router';
import { NgxuxMatDialogModule }                                      from '@ngxux/ngxux-mat-dialog';
import { NgxuxMatHeaderNavModule }                                   from '../../../ngxux-mat-header-nav/src/lib/ngxux-mat-header-nav.module';
import { NgxuxUserManagementCreateDialogComponent }                  from './ngxux-user-management-create-dialog/ngxux-user-management-create-dialog.component';
import { NgxuxUserManagementComponent }                              from './ngxux-user-management.component';

@NgModule({

    declarations: [

        NgxuxUserManagementComponent,

        NgxuxUserManagementCreateDialogComponent

    ],

    imports: [

        MatButtonToggleModule,
        MatFormFieldModule,
        MatInputModule,
        NgxuxMatHeaderNavModule,
        NgxuxMatDialogModule,
        ReactiveFormsModule,

        RouterModule.forChild([

            {

                path: 'settings/users',
                component: NgxuxUserManagementComponent

            }

        ])

    ],
    exports: [

        NgxuxUserManagementComponent

    ],

    entryComponents: [

        NgxuxUserManagementCreateDialogComponent

    ]

})

export class NgxuxUserManagementModule {
}
