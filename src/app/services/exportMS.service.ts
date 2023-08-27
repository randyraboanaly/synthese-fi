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
export class ExportMSService {

    constructor(
        private http: HttpClient
    ) { }

    getRequetePMS(): Observable<any> {
        return this.http.get(
            URL_API + '/nomenclature/listePms/',
            httpOptions
        );
    }

}
