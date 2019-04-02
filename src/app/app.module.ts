import { HTTP_INTERCEPTORS }             from '@angular/common/http';
import { NgModule }                      from '@angular/core';
import { MatSidenavModule }              from '@angular/material';
import { BrowserModule }                 from '@angular/platform-browser';
import { BrowserAnimationsModule }       from '@angular/platform-browser/animations';
import { RouterModule }                  from '@angular/router';
import { WebcamModule }                  from 'ngx-webcam';
import { NgxuxCameraCaptureModule }      from '../../projects/ngxux-camera-capture/src/lib/ngxux-camera-capture.module';
import { HttpErrorInterceptor }          from '../../projects/ngxux-common/src/lib/HttpErrorInterceptor';
import { JwtInterceptor }                from '../../projects/ngxux-common/src/lib/JwtInterceptor';
import { NgxuxDetailsDialogModule }      from '../../projects/ngxux-details-dialog/src/lib/ngxux-details-dialog.module';
import { NgxuxMatDialogModule }          from '../../projects/ngxux-mat-dialog/src/lib/ngxux-mat-dialog.module';
import { NgxuxMatHeaderNavModule }       from '../../projects/ngxux-mat-header-nav/src/lib/ngxux-mat-header-nav.module';
import { NgxuxMatLoginModule }           from '../../projects/ngxux-mat-login/src/lib/ngxux-mat-login.module';
import { NgxuxMatTableModule }           from '../../projects/ngxux-mat-table/src/lib/ngxux-mat-table.module';
import { NgxuxMatToolbarModule }         from '../../projects/ngxux-mat-toolbar/src/lib/ngxux-mat-toolbar.module';
import { NgxuxMatVerticalToolbarModule } from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar.module';
import { NgxuxSectionHeaderModule }      from '../../projects/ngxux-section-header/src/lib/ngxux-section-header.module';
import { NgxuxUserManagementConfig }     from '../../projects/ngxux-user-management/src/lib/ngxux-user-management-config';
import { NgxuxUserManagementModule }     from '../../projects/ngxux-user-management/src/lib/ngxux-user-management.module';
import { environment }                   from '../environments/environment';

import { AppComponent }        from './app.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { TestWidgetComponent } from './test-widget/test-widget.component';

@NgModule({

    declarations: [

        AppComponent,

        TestDialogComponent,

        TestWidgetComponent

    ],

    entryComponents: [

        TestDialogComponent

    ],

    imports: [

        RouterModule.forRoot([]),

        BrowserModule,
        BrowserAnimationsModule,

        MatSidenavModule,

        NgxuxDetailsDialogModule,
        NgxuxMatDialogModule,
        NgxuxMatHeaderNavModule,
        NgxuxMatLoginModule,
        NgxuxMatTableModule,
        NgxuxMatToolbarModule,
        NgxuxMatVerticalToolbarModule,
        NgxuxSectionHeaderModule,
        NgxuxUserManagementModule.forRoot(new NgxuxUserManagementConfig({

            API_BASE: environment.API_BASE,
            ROUTE: 'settings/users'

        })),

        WebcamModule,
        NgxuxCameraCaptureModule

    ],

    providers: [

        {

            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true,

        }, {

            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,

        },

    ],

    bootstrap: [ AppComponent ]

})
export class AppModule {
}
