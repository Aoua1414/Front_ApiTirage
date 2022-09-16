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

  nombre!: number ;
  libelle!:string ;
  
  resetForm(){
    this.libelle!
    this.nombre
    }
  //Creation de tirage
  //debut
  getTotal(){
    return this.http.get(`http://localhost:8080/tirage/total`)
  }

  CreerTirage(tirage:Tirage, libelle:String, nombre:number){

    return this.http.post(`http://localhost:8080/tirage/createTirage/${libelle}/${nombre}`,tirage);
    this.resetForm();
  }

 //Fin
 
//afficher les tirages sur une liste
 TrouveTirageParListe(id:number){
  return this.http.get(`http://localhost:8080/tirage/tirage_liste/${id}`)
 }

 getImpoter(){
  
 }
}
