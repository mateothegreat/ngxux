import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators }     from '@angular/forms';

@Component({

    selector: 'ngxux-mat-login',

    template: `

        <div class="wrapper">

            <div class="container mat-elevation-z4">

                <div class="title"
                     [style.background]="titleBackgroundColor">

                    {{ title }}

                </div>

                <div class="form">

                    <div class="message">

                        {{ message }}

                    </div>

                    <form [formGroup]="formGroup">

                        <table>

                            <tr>

                                <td>

                                    <mat-form-field floatLabel="auto">

                                        <input matInput
                                               required
                                               appAutofocus
                                               placeholder="Email Address"
                                               maxlength="255"
                                               formControlName="email">

                                    </mat-form-field>

                                </td>

                            </tr>

                            <tr>

                                <td>

                                    <mat-form-field floatLabel="auto">

                                        <input matInput
                                               required
                                               placeholder="Password"
                                               maxlength="255"
                                               type="password"
                                               formControlName="password">

                                    </mat-form-field>

                                </td>

                            </tr>

                        </table>

                    </form>

                </div>

                <div class="buttons"
                     [style.background]="buttonsBackgroundColor">

                    <button mat-raised-button
                            (click)="onButtonClick()">

                        Login

                    </button>

                </div>

            </div>

        </div>

    `,

    styleUrls: [ './ngxux-mat-login.component.scss' ]

})
export class NgxuxMatLoginComponent {

    @Input() public title: string = 'Welcome';
    @Input() public message: string = 'Enter your email address and password to login!';

    @Input() public titleBackgroundColor: string = '#666';
    @Input() public buttonsBackgroundColor: string = '#666';

    @Input() public email: string;

    @Output() public onLoginClick = new EventEmitter();

    public formGroup = new FormGroup({

        email: new FormControl('', [

            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')

        ]),

        password: new FormControl('', [

            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(255)

        ]),

    });

    public onButtonClick(): void {

        this.onLoginClick.emit(this.formGroup.value);

    }

}
