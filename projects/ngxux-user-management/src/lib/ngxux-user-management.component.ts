import { Component }                                     from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { NgxuxMatHeaderNavButton }                       from '../../../ngxux-mat-header-nav/src/lib/ngxux-mat-header-nav-button';
import { NgxuxUserManagementCreateDialogComponent }      from './ngxux-user-management-create-dialog/ngxux-user-management-create-dialog.component';

@Component({

    selector: 'ngxux-user-management',
    template: `

        <ngxux-mat-header-nav title="Manage Users"
                              detail="Manage user access accounts."
                              (buttonClick)="onHeaderNavButtonClick($event)"
                              [buttons]="[

                                        {

                                         label: 'Create User'

                                        }, {

                                            label: 'Create Admin'

                                        }]"

                              [tabs]="[

                                        {

                                        label: 'Users',
                                        path: '/settings/assessments/manage'

                                        }, {

                                        label: 'Administrators',
                                        path: '/settings/assessments/questions'

                                        }

                                        ]" contentPosition="top">

        </ngxux-mat-header-nav>

        <p>
            ngxux-user-management works!
        </p>
    `,
    styleUrls: [ './ngxux-user-management.component.scss' ]

})
export class NgxuxUserManagementComponent {

    public constructor(private dialogService: NgxuxMatDialogService) {

    }

    public onHeaderNavButtonClick(e: NgxuxMatHeaderNavButton): void {

        console.log(e);

        if (e.label === 'Create User') {

            this.dialogService.open(NgxuxUserManagementCreateDialogComponent, new NgxuxMatDialogSettings({

                id: 'create-user',
                title: 'Create User',

                width: '420px',
                height: '400px',

                nextShow: true,
                nextLabel: 'Create'

            }));

        }

    }

}
