import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  url ="http://localhost:8080/tirage/liste";
  constructor(private http: HttpClient) { }
  
  getTirage(): Observable<object>
  {
    //accès à la base de donnée par httpclient
    return this.http.get(`${this.url}`);

  }
  
  getListe(): Observable<object>
  {
    //accès à la base de donnée par httpclient
    return this.http.get(`${this.url}`);

  }
  
}
