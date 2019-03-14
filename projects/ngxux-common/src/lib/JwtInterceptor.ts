import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable }                                           from '@angular/core';
import { Observable }                                           from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    public static getToken(): string {

        return localStorage.getItem('token');

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!!JwtInterceptor.getToken()) {

            request = request.clone({

                setHeaders: {

                    Authorization: `Bearer ${ JwtInterceptor.getToken() }`

                }

            });


        }

        return next.handle(request);

    }

}
