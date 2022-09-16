import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';
import { Postulant } from './postulant';

@Injectable({
  providedIn: 'root'
})
export class PostulantService {

  url = "http://localhost:8080/postulant/liste";
  constructor(private http:HttpClient) { }
  
  getPostulant(): Observable<Postulant[]>
  {
    //accès à la base de donnée par httpclient
    return this.http.get<Postulant[]>(`${this.url}`);

  }
 /* getListePostulant(): Observable<Postulant[]>{
return this.http.get<Postulant[]>
  }*/
  getTotalpost(){
    return this.http.get(`http://localhost:8080/postulant/totalpostulant`)
  }
}
