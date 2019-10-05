import { HttpClient }                         from '@angular/common/http';
import { Injectable }                         from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { Pageable }                           from './Pageable';
import { PageRequest }                        from './PageRequest';

@Injectable({ providedIn: 'root' })
export class APIClient<T> {

    private config$: ReplaySubject<any> = new ReplaySubject(1);

    public constructor(private httpClient: HttpClient) {

        httpClient.get('/assets/config.json').subscribe(config => {

            console.log(config);

            this.config$.next(config);

        });

    }

    public _getPageable<T>(url: string, dataTablePage?: any): Observable<Pageable<T>> {

        let subject: Subject<Pageable<T>> = new Subject();

        this.config$.subscribe(config => {

            if (dataTablePage) {

                return this.httpClient.get<Pageable<T>>(`${ config.API_BASE }${ url }?${ dataTablePage.toParams() }`).subscribe(r => subject.next(r));

            } else {

                return this.httpClient.get<Pageable<T>>(`${ config.API_BASE }${ url }`).subscribe(r => subject.next(r));

            }

        });

        return subject;

    }

    public get<T>(url: string): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            return this.httpClient.get<T>(`${ config.API_BASE }${ url }`).subscribe(r => subject.next(r));

        });

        return subject;

    }

    public search<T>(url: string, pageRequest: PageRequest): Observable<any> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            return this.httpClient.get<T>(`${ config.API_BASE }${ url }?terms=${ pageRequest.terms }&limit=${ pageRequest.limit }&offset=${ pageRequest.offset }`).subscribe(r => subject.next(r));

        });

        return subject;

    }

    public post<T>(url: string, body?: any): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            try {

                return this.httpClient.post<T>(`${ config.API_BASE }${ url }`, body).subscribe(r => subject.next(r));

            } catch (e) {

                console.log(e);

            }

        });

        return subject;

    }

    public put<T>(url: string, body?: any): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            return this.httpClient.put<T>(`${ config.API_BASE }${ url }`, body).subscribe(r => subject.next(r));

        });

        return subject;

    }

    public delete<T>(url: string): Observable<T> {

        let subject: Subject<T> = new Subject();

        this.config$.subscribe(config => {

            this.httpClient.delete<T>(`${ config.API_BASE }${ url }`).subscribe(r => subject.next(r));

        });

        return subject;

    }

}
