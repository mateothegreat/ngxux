import { HttpClient }                       from '@angular/common/http';
import { Inject, Injectable }               from '@angular/core';
import { Pageable }                         from '@ngxux/common';
import { Observable }                       from 'rxjs';
import { NgxuxUserManagementConfigService } from './ngxux-user-management-config-service';
import { User }                             from './user';

@Injectable({
    providedIn: 'root'
})
export class NgxuxUserManagementService {

    public constructor(@Inject(NgxuxUserManagementConfigService) private config,
                       private httpClient: HttpClient) {

        console.log(config);

    }

    public getUsers(): Observable<Pageable<User>> {

        return this.httpClient.get<Pageable<User>>(`${ this.config.API_BASE }/users`);

    }

    public createUser(user: User): Observable<User> {

        return this.httpClient.post<User>(`${ this.config.API_BASE }/users`, user);

    }

}
