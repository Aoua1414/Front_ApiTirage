import { Component, OnInit } from '@angular/core';
import { ListePostulant } from '../liste-postulant';
import { ListePostulantService } from '../liste-postulant.service';
import { PostulantService } from '../postulant.service';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  listePost:any;
  public Nombre:any;
  tirage!:Tirage[];
  nombrelistestotal!:any;
totaltirage!:any
totalpostulant!:any
nombreListe!:any;
  constructor(private service :ListePostulantService,private servicT:TirageService,  private servicepost : PostulantService  ) { }

  ngOnInit(): void {
       this.service.getListe().subscribe(data=>{
      console.log(data)
      this.listePost = data;
      this.nombrelistestotal=this.listePost.length
      console.log(this.nombrelistestotal)

      
  });


  // this.service.getNombre(this.listePost.libelle).subscribe(data=>{
  //   console.log(data)
  //   this.Nombre = data;
  // });



  this.service.getNombreListe().subscribe(data=>{
   
    this.nombreListe=data;

    console.log("----------"+data)
  })

  this.servicT.getTotal().subscribe(data=>{
    this.totaltirage =data
  })

this.servicepost.getTotalpost().subscribe(data=>{
  this.totalpostulant=data
})



  
  }


 

}
