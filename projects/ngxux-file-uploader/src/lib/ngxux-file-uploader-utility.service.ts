import { Injectable }          from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NgxuxFileUploaderUtilityService {

    public data$: Subject<FileReader> = new Subject();

    public read(file: File): Observable<FileReader> {

        const reader: FileReader = new FileReader();

        reader.onload = () => {

            this.data$.next(reader);

        };

        reader.onerror = (error) => {

            console.error(error);

        };

        reader.readAsDataURL(file);

        return this.data$;

    }

}
