import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GlobalVariable } from '../others/global';

const URL_API = GlobalVariable.URL;

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient
    ) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post(
            URL_API + '/utilisateur/connexion',
            {
                username,
                password
            },
            httpOptions
        );
    }

}
