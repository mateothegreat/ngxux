import { HttpClient, HttpHeaders }         from '@angular/common/http';
import { Inject, Injectable }              from '@angular/core';
import { Observable }                      from 'rxjs';
import { NgxuxFileUploaderConfigService }  from './ngxux-file-uploader-config-service';
import { NgxuxFileUploaderUtilityService } from './ngxux-file-uploader-utility.service';

@Injectable({
    providedIn: 'root'
})
export class NgxuxFileUploaderService {

    public urlBase: string;

    public constructor(@Inject(NgxuxFileUploaderConfigService) private config,
                       private fileUploaderUtilityService: NgxuxFileUploaderUtilityService,
                       private httpClient: HttpClient) {

    }

    public upload(data: any): Observable<any> {

        return this.httpClient.post<any>(`${ this.config.API_BASE }${ this.urlBase || this.config.ROUTE }`, data, {

            headers: new HttpHeaders({

                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // Authorization: `Bearer ${ this.config.TOKEN }`

            }),

            // reportProgress: false,
            // observe: 'events'

        });

        // }).pipe(map((event) => {
        //
        //     switch (event.type) {
        //
        //         case HttpEventType.UploadProgress:
        //
        //             const progress = Math.round(100 * event.loaded / event.total);
        //
        //             return {
        //
        //                 status: 'progress',
        //                 message: progress
        //
        //             };
        //
        //         case HttpEventType.DownloadProgress:
        //
        //             return;
        //
        //         case HttpEventType.ResponseHeader:
        //
        //             return;
        //
        //         case HttpEventType.Response:
        //
        //             return event.body;
        //
        //         default:
        //
        //             return `Unhandled event: ${ event.type }`;
        //
        //     }
        //
        // }));

    }

}
