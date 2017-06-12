import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  private _headers = new Headers({'Content-Type': 'application/json'});
  baseUrl: string = 'http://localhost:8080/boutique/models';
  queryUrl: string = '?search=';

  constructor(private http: Http) { }


  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json())

         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      
  }
}