import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import{environment} from '../../../environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' 
})
export class DataService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  constructor(    
    private router: Router,
    private http:HttpClient 
    ) { }
  apiUrl:string=environment.apiUrl;
  
  login(username, password) {
    return this.http.post<any>(`${environment.apiUrl}/login`, { username, password })
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
}
}
