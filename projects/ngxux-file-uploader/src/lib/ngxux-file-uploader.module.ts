import { CommonModule }                                                        from '@angular/common';
import { HttpClientModule }                                                    from '@angular/common/http';
import { ModuleWithProviders, NgModule }                                       from '@angular/core';
import { ReactiveFormsModule }                                                 from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule } from '@angular/material';
import { BytesPipe }                                                           from './bytes.pipe';
import { FileUploadInputFor }                                                  from './fileUploadInputFor.directive';
import { NgxuxFileUploaderConfig }                                             from './ngxux-file-uploader-config';
import { NgxuxFileUploaderConfigService }                                      from './ngxux-file-uploader-config-service';
import { NgxuxFileUploaderComponent }                                          from './ngxux-file-uploader.component';
import { NgxuxFileUploaderService }                                            from './ngxux-file-uploader.service';

@NgModule({

    declarations: [

        NgxuxFileUploaderComponent,

        BytesPipe,
        FileUploadInputFor

    ],

    imports: [

        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatProgressBarModule,
        MatIconModule,
        MatCardModule,
        ReactiveFormsModule,

    ],

    exports: [

        NgxuxFileUploaderComponent,

        BytesPipe,
        FileUploadInputFor

    ]

})
export class NgxuxFileUploaderModule {

    public static forRoot(config: NgxuxFileUploaderConfig): ModuleWithProviders {

        return {

            ngModule: NgxuxFileUploaderModule,
            providers: [

                NgxuxFileUploaderService,

                {

                    provide: NgxuxFileUploaderConfigService,
                    useValue: config

                }

            ]

        };

    }

}
