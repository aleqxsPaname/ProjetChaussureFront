import { Article } from './article';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServiceArticle {
  

 private _headers = new Headers({'Content-Type': 'application/json'});

 constructor(private _http: Http) { }

private url: string = "http://localhost:8080/boutique/model"; 

   
      private getArticleUrl(id){
        return this.url +"/"+id;
        
      }

     getArticleByid(id){
        return this._http.get(this.getArticleUrl(id))
          .map(res => res.json());
      }
    





}
