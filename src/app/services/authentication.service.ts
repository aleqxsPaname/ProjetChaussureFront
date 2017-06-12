import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from './client';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    private _headers = new Headers({'Content-Type': 'application/json'});

     

  constructor(private _http : Http){
   
   } 

    public inscription (client : Client) : Observable<Client> {
        
        let urlWs : string = "http://localhost:8080/boutique/client/new";
        
        return this._http.post(urlWs, JSON.stringify(client), {headers: this._headers}).map(response => response.json())
                        .catch(e => Observable.throw('error: '+ e));  
    }


    public authentification (client : Client) : Observable<Client> {
        
        let urlWs : string = "http://localhost:8080/boutique/clients/login/"+client.email+"/"+client.mdp;
         return this._http.get(urlWs).map(response=> response.json()).catch(e=> Observable.throw('error: '+e));  
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('clientConnecte');
    }

}