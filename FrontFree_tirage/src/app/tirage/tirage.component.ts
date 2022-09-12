import { Component, OnInit } from '@angular/core';
import {faHome,faDice,faList } from '@fortawesome/free-solid-svg-icons'
import { ListePostulantService } from '../liste-postulant.service';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';
export class Tirages {
  nombre : number |undefined;
  datet: Date | undefined;
  libelles:string |undefined;
  //libelle:string |undefined;


}
@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

  listePost:any;
  constructor(private service :ListePostulantService) { }

  ngOnInit(): void {
   this.service.getListe().subscribe(data=>{
    console.log(data)
    this.listePost = data;
});
  }
  
}
