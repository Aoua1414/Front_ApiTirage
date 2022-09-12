import { Component, OnInit } from '@angular/core';
import { ListePostulant } from '../liste-postulant';
import { ListePostulantService } from '../liste-postulant.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  listePost:any;
  public Nombre:any;
  constructor(private service :ListePostulantService) { }

  ngOnInit(): void {

    this.service.getListe().subscribe(data=>{
      console.log(data)
      this.listePost = data;

      this.service.getNombre(this.listePost.libelle).subscribe(data=>{
        console.log(data)
        this.Nombre = data;
      });
      
  });
  
  }

}
