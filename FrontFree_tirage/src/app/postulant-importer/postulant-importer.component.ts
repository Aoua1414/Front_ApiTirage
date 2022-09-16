import { Component, OnInit } from '@angular/core';
import { ListePostulantService } from '../liste-postulant.service';

@Component({
  selector: 'app-postulant-importer',
  templateUrl: './postulant-importer.component.html',
  styleUrls: ['./postulant-importer.component.scss']
})
export class PostulantImporterComponent implements OnInit {
  listePost:any;
  page:number=1;
  constructor(private service :ListePostulantService) { }

  ngOnInit(): void {
    this.service.getListe().subscribe(data=>{
      console.log(data)
      this.listePost = data;
  })}

}
