import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Tirage } from './tirage';

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

  //Creation de tirage
  //debut
  getTotal():number{
    return this.getTirage.length
  }

  CreerTirage(tirage:Tirage, libelle:String, nombre:number){

    return this.http.post(`http://localhost:8080/tirage/createTirage/${libelle}/${nombre}`,tirage);
  }

 //Fin

 getImpoter(){
  
 }
}
