import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Model } from './model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceModel {
  

 private _headers = new Headers({'Content-Type': 'application/json'});

 constructor(private _http: Http) { }

getTousLesModels(){

        return this._http.get('http://localhost:8080/boutique/models')
        .map(res => res.json())
       
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


}
