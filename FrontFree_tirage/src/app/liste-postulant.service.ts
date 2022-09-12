import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListePostulantService {

  listePost:any;
  constructor(private http : HttpClient) { }
  getListe(): Observable<object>{
return this.http.get("http://localhost:8080/listepostulant/liste")
  }

  getNombre(libelle:string): Observable<object>{
    return this.http.get("http://localhost:8080/listepostulant/nombre/"+`${libelle}`)
      }
  
}
