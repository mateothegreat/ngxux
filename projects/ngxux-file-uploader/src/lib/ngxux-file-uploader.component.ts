import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup }                                 from '@angular/forms';
import { Subscription }                                           from 'rxjs';
import { NgxuxFileUploaderAccepts }                               from './ngxux-file-uploader-accepts';
import { NgxuxFileUploaderConfigService }                         from './ngxux-file-uploader-config-service';
import { NgxuxFileUploaderUtilityService }                        from './ngxux-file-uploader-utility.service';
import { NgxuxFileUploaderService }                               from './ngxux-file-uploader.service';

@Component({
    selector: 'ngxux-file-uploader',
    template: `

        <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">

            <input type="file"
                   name="file"
                   id="file"
                   (change)="onFileChange($event)"
                   [accept]="_accept"
                   class="inputfile">

            <label for="file"
                   [style.background-color]="backgroundColor">{{ label }}</label>

        </form>
    `,

    styleUrls: [ './ngxux-file-uploader.component.scss' ]

})
export class NgxuxFileUploaderComponent implements OnInit {

    @Input() public urlBase: string;
    @Input() public label: string = 'Upload a file..';
    @Input() public backgroundColor: string = '#999';
    @Input() public accept: Array<string> | string = NgxuxFileUploaderAccepts.ANY;

    @Output() public onUpload: EventEmitter<any> = new EventEmitter();

    public formGroup: FormGroup = new FormGroup({

        file: new FormControl('')

    });

    private file: File;
    private subscription: Subscription;

    public constructor(@Inject(NgxuxFileUploaderConfigService) private config,
                       private fileUploaderUtilityService: NgxuxFileUploaderUtilityService,
                       private uploaderService: NgxuxFileUploaderService) {

    }

    public get _accept(): string {

        return Array.isArray(this.accept) ? this.accept.join(',') : this.accept;

    }

    public ngOnInit(): void {

        this.uploaderService.urlBase = this.urlBase;

    }

    public onSubmit(): void {

        this.fileUploaderUtilityService.read(this.file).subscribe(reader => {

            this.subscription = this.uploaderService.upload({

                filename: this.file.name,
                bytes: this.file.size,
                type: this.file.type,
                data: reader.result.toString().replace(/^data:image\/\w+;base64,/, '')

            }).subscribe((res) => {

                this.onUpload.emit(res);

            });

        });

    }

    public onFileChange(e: any): void {

        // @ts-ignore
        if (event.target.files.length > 0) {

            // @ts-ignore
            this.file = event.target.files[ 0 ];

            // @ts-ignore
            this.formGroup.get('file').setValue(event.target.files[ 0 ]);

            this.onSubmit();

        }

    }

}
