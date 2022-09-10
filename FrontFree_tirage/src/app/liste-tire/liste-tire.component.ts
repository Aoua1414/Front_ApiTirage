import { Component, OnInit } from '@angular/core';
import { ListetiréService } from '../listetiré.service';

@Component({
  selector: 'app-liste-tire',
  templateUrl: './liste-tire.component.html',
  styleUrls: ['./liste-tire.component.scss']
})
export class ListeTireComponent implements OnInit {
  listetire:any;

  constructor(private service : ListetiréService) { }

  ngOnInit(): void {
    this.service.getPostulanttire().subscribe(data=>{
      this.listetire = data;
    });
  }

}
