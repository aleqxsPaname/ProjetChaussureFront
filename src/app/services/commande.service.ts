import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import { Commande } from "app/services/commande";
import { Observable } from "rxjs/Observable";


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class CommandeService {

    private commande: Commande;
    private urls: string = "http://localhost:8080/boutique/commande/new";
    private _headers = new Headers({'Content-Type': 'application/json'}); 

    constructor(private http: Http) { }

    public addCommande (commande: Commande) {
        console.log("ENVOI JSON");
        console.log(commande);    
        return this.http.post(this.urls, JSON.stringify(commande), {headers: this._headers})
                    .map((response: Response) => response.json())
                    .catch(e => Observable.throw('error:' + e)); 
    }

  
   
}