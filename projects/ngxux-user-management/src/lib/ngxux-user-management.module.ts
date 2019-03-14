import { HttpClientModule }                                          from '@angular/common/http';
import { ModuleWithProviders, NgModule }                             from '@angular/core';
import { ReactiveFormsModule }                                       from '@angular/forms';
import { MatButtonToggleModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { RouterModule }                                              from '@angular/router';
import { NgxuxMatDialogModule }                                      from '@ngxux/ngxux-mat-dialog';
import { NgxuxMatHeaderNavModule }                                   from '@ngxux/ngxux-mat-header-nav';
import { NgxuxUserManagementConfig }                                 from './ngxux-user-management-config';
import { NgxuxUserManagementConfigService }                          from './ngxux-user-management-config-service';
import { NgxuxUserManagementCreateDialogComponent }                  from './ngxux-user-management-create-dialog/ngxux-user-management-create-dialog.component';
import { NgxuxUserManagementSearchComponent }                        from './ngxux-user-management-search/ngxux-user-management-search.component';
import { NgxuxUserManagementComponent }                              from './ngxux-user-management.component';
import { NgxuxUserManagementService }                                from './ngxux-user-management.service';

@NgModule({

    declarations: [

        NgxuxUserManagementComponent,
        NgxuxUserManagementCreateDialogComponent,
        NgxuxUserManagementSearchComponent

    ],

    imports: [

        HttpClientModule,
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

    public static forRoot(config: NgxuxUserManagementConfig): ModuleWithProviders {

        return {

            ngModule: NgxuxUserManagementModule,
            providers: [

                NgxuxUserManagementService,

                {

                    provide: NgxuxUserManagementConfigService,
                    useValue: config

                }

            ]

        };

    }

}
