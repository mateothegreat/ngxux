import { HTTP_INTERCEPTORS }             from '@angular/common/http';
import { NgModule }                      from '@angular/core';
import { MatSidenavModule }              from '@angular/material';
import { BrowserModule }                 from '@angular/platform-browser';
import { BrowserAnimationsModule }       from '@angular/platform-browser/animations';
import { RouterModule }                  from '@angular/router';
import { ToastrModule }                  from 'ngx-toastr';
import { WebcamModule }                  from 'ngx-webcam';
import { NgxuxCameraCaptureConfig }      from '../../projects/ngxux-camera-capture/src/lib/ngxux-camera-capture-config';
import { NgxuxCameraCaptureModule }      from '../../projects/ngxux-camera-capture/src/lib/ngxux-camera-capture.module';
import { JwtInterceptor }                from '../../projects/ngxux-common/src/lib/JwtInterceptor';
import { NgxuxDetailsDialogModule }      from '../../projects/ngxux-details-dialog/src/lib/ngxux-details-dialog.module';
import { NgxuxFileManagementConfig }     from '../../projects/ngxux-file-management/src/lib/ngxux-file-management-config';
import { NgxuxFileManagementModule }     from '../../projects/ngxux-file-management/src/lib/ngxux-file-management.module';
import { NgxuxFileUploaderConfig }       from '../../projects/ngxux-file-uploader/src/lib/ngxux-file-uploader-config';
import { NgxuxFileUploaderModule }       from '../../projects/ngxux-file-uploader/src/lib/ngxux-file-uploader.module';
import { NgxuxMailchimpModule }          from '../../projects/ngxux-mailchimp/src/lib/ngxux-mailchimp.module';
import { NgxuxMatDialogModule }          from '../../projects/ngxux-mat-dialog/src/lib/ngxux-mat-dialog.module';
import { NgxuxMatHeaderNavModule }       from '../../projects/ngxux-mat-header-nav/src/lib/ngxux-mat-header-nav.module';
import { NgxuxMatLoginModule }           from '../../projects/ngxux-mat-login/src/lib/ngxux-mat-login.module';
import { NgxuxMatTableModule }           from '../../projects/ngxux-mat-table/src/lib/ngxux-mat-table.module';
import { NgxuxMatToolbarModule }         from '../../projects/ngxux-mat-toolbar/src/lib/ngxux-mat-toolbar.module';
import { NgxuxMatVerticalToolbarModule } from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar.module';
import { NgxuxSectionHeaderModule }      from '../../projects/ngxux-section-header/src/lib/ngxux-section-header.module';
import { NgxuxUserManagementConfig }     from '../../projects/ngxux-user-management/src/lib/ngxux-user-management-config';
import { NgxuxUserManagementModule }     from '../../projects/ngxux-user-management/src/lib/ngxux-user-management.module';
import { NgxuxWindowReceiverModule }     from '../../projects/ngxux-window-receiver/src/lib/ngxux-window-receiver.module';
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
        NgxuxMailchimpModule,
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
        NgxuxFileUploaderModule.forRoot(new NgxuxFileUploaderConfig({

            API_BASE: environment.API_BASE,
            ROUTE: '/partners/whitelabel/logo/upload',
            TOKEN: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290QHN0cmVhbW52ci5jb20iLCJleHAiOjE1NTg3MTI3OTJ9.PiD1vlprbMRpFUqACkJXfj-nFovjMGjrS18FLorzE_Ju1wS2hzNc6rYyP3mCB4RsUPcBPGVRKypzyhvLDHRj9Q'

        })),
        NgxuxFileManagementModule.forRoot(new NgxuxFileManagementConfig({

            API_BASE: environment.API_BASE,
            ROUTE: 'settings/users'

        })),
        NgxuxWindowReceiverModule,
        WebcamModule,
        NgxuxCameraCaptureModule.forRoot(new NgxuxCameraCaptureConfig({

            API_BASE: environment.API_BASE,
            ROUTE: 'settings/users'

        })),
        // NgxuxFileUploaderModule,
        ToastrModule.forRoot({

            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            progressBar: true,
            enableHtml: true,
            closeButton: true

        }),

    ],

    providers: [

        {

            //     provide: HTTP_INTERCEPTORS,
            //     useClass: HttpErrorInterceptor,
            //     multi: true,
            //
            // }, {

            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true,

        },

    ],

    bootstrap: [ AppComponent ]

})
export class AppModule {
}
