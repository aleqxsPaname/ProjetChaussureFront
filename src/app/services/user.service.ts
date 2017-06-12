import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:8080/boutique/clients').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users', user).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id_client, user).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id).map((response: Response) => response.json());
    }

    // private helper methods

    // private jwt() {
    //     // create authorization header with jwt token
    //     let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //     if (currentUser && currentUser.token) {
    //         let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //         return new RequestOptions({ headers: headers });
    //     }
    // }
}