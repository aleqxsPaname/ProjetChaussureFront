import { Model } from './model';
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
 private id:number = 1;

 constructor(private _http: Http) { }

//private url: string = "http://localhost:8080/boutique/model/" + this.id + "/articles"; 

private url: string = "http://localhost:8080/boutique/model/"; 

   
       private getArticleUrl(id){
        return this.url +"/"+id;
        
       }

    // getArticlesByModel(id) {

        
    //     return this._http.get(this.url)
    //       .map(res => res.json())
    //       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    // }


      getArticlesByModel(id){
        return this._http.get(this.getArticleUrl(id) +"/articles")
          .map(res => res.json());
      }
    





}
