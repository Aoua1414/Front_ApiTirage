import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListetiréService {

  constructor(private http:HttpClient) { }
  
  getPostulanttire():Observable<object>
  {
    //accès à la base de donnée par httpclient
    return this.http.get("http://localhost:8080/postulanttire/afficherpostulanttire");

  }

  getPostulanttireTirage(id_tirage:number)
  {
    //accès à la base de donnée par httpclient
    return this.http.get(`http://localhost:8080/postulanttire/afficherpostulanttirepartirage/${id_tirage}` );

  }
}
