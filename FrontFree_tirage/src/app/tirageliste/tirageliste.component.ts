import { Component, OnInit } from '@angular/core';
import { Listetiré } from '../listetiré';
import { ListetiréService } from '../listetiré.service';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-tirageliste',
  templateUrl: './tirageliste.component.html',
  styleUrls: ['./tirageliste.component.scss']
})
export class TiragelisteComponent implements OnInit {

  tirage:any;
  libelletirage!:any
  posttire!:any
  page:number=1;
  constructor() { }

  ngOnInit(): void {

  
  }

}
