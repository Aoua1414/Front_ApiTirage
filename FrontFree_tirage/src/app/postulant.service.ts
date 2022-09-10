import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  constructor(private http:HttpClient) { }
  getPostulant(): Observable<object>
  {
    //accès à la base de donnée par httpclient
    return this.http.get("http://localhost:8080/postulant/afficherpostulant");

  }
}
