import { NgModule }                      from '@angular/core';
import { MatSidenavModule }              from '@angular/material';
import { BrowserModule }                 from '@angular/platform-browser';
import { BrowserAnimationsModule }       from '@angular/platform-browser/animations';
import { RouterModule }                  from '@angular/router';
import { NgxuxMatDialogModule }          from '../../projects/ngxux-mat-dialog/src/lib/ngxux-mat-dialog.module';
import { NgxuxMatHeaderNavModule }       from '../../projects/ngxux-mat-header-nav/src/lib/ngxux-mat-header-nav.module';
import { NgxuxMatLoginModule }           from '../../projects/ngxux-mat-login/src/lib/ngxux-mat-login.module';
import { NgxuxMatTableModule }           from '../../projects/ngxux-mat-table/src/lib/ngxux-mat-table.module';
import { NgxuxMatToolbarModule }         from '../../projects/ngxux-mat-toolbar/src/lib/ngxux-mat-toolbar.module';
import { NgxuxMatVerticalToolbarModule } from '../../projects/ngxux-mat-vertical-toolbar/src/lib/ngxux-mat-vertical-toolbar.module';

import { AppComponent }        from './app.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';

@NgModule({

    declarations: [

        AppComponent,

        TestDialogComponent

    ],

    entryComponents: [

        TestDialogComponent

    ],

    imports: [

        RouterModule.forRoot([]),

        BrowserModule,
        BrowserAnimationsModule,

        MatSidenavModule,

        NgxuxMatDialogModule,
        NgxuxMatHeaderNavModule,
        NgxuxMatLoginModule,
        NgxuxMatTableModule,
        NgxuxMatToolbarModule,
        NgxuxMatVerticalToolbarModule,

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
