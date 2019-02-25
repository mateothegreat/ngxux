import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxuxUserManagementService }         from '../ngxux-user-management.service';

@Component({
    selector: 'ngxux-ngxux-user-management-create-dialog',
    templateUrl: './ngxux-user-management-create-dialog.component.html',
    styleUrls: [ './ngxux-user-management-create-dialog.component.scss' ]
})
export class NgxuxUserManagementCreateDialogComponent {

    public formGroup: FormGroup = new FormGroup({

        email: new FormControl('', [

            Validators.required

        ]),

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(32)

        ]),

        password2: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(32)

        ]),

    });

    public constructor(private ngxuxUserManagementService: NgxuxUserManagementService) {

    }
    
    public onNextClick(): void {

    }

}
