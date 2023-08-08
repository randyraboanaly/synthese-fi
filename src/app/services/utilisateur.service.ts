import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GlobalVariable } from '../others/global';
import { Utilisateur } from '../models/utilisateur';

const URL_API = GlobalVariable.URL;

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
@Injectable({
    providedIn: 'root'
})
export class UtilisateurService {

    constructor(
        private http: HttpClient
    ) {

    }

    public getUtilisateurs(): Observable<any> {
        return this.http.get(URL_API + "/utilisateur/liste");
    }

    public saveUtilisateur(user: Utilisateur): Observable<any> {
        console.log(user);
        return this.http.post(
            URL_API + '/utilisateur/inscription',
            {
                "username": user.username,
                "password": user.password,
                "passwordConfirmation": user.passwordConfirmation,
                "passwordAncien": null,
                "nom": user.nom,
                "prenom": user.prenom,
                "email": user.email,
                "dateExpirationCpte": null,
                "dateExpirationMdp": new Date(new Date().getFullYear(), new Date().getMonth() + 3, new Date().getDate()).toLocaleDateString(),
                "renouvelerMdp": true,
                "fonction": user.fonction,
                "telephone": user.telephone,
                "enabled": true,
                "accountExpired": false,
                "accountLocked": false,
                "passwordExpired": false,
                "authorities": null,
                "credentialsNonExpired": true,
                "accountNonExpired": true,
                "accountNonLocked": true,
            }, httpOptions);
    }

}
