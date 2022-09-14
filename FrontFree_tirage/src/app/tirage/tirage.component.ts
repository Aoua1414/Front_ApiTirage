import { Component, OnInit } from '@angular/core';
import {faHome,faDice,faList } from '@fortawesome/free-solid-svg-icons'
import { ListePostulantService } from '../liste-postulant.service';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

   tirage:Tirage = new Tirage();
  listePost:any;
  tirages!:Tirage[];
  choix:any;
  nombre:any;
  constructor(private service :ListePostulantService, private serviceTirage: TirageService) { }

  ngOnInit(): void {

   this.service.getListe().subscribe(data=>{
    console.log(data)
    this.listePost = data;
  });

  // this.serviceTirage.CreerTirage(this.tirage, this.choix, this.nombre).subscribe(data=>{
  // console.log(data);
  // },
  // error=>console.log(error)
  // );


}
onSubmit(){
  console.log(this.choix)
  this.serviceTirage.CreerTirage(this.tirage, this.choix, this.tirage.nombre).subscribe(data=>{
   
   })
 }
}
