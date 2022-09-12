import { Component, OnInit } from '@angular/core';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-page-des-listes',
  templateUrl: './page-des-listes.component.html',
  styleUrls: ['./page-des-listes.component.scss']
})
export class PageDesListesComponent implements OnInit {


  tirage:any;
  constructor(private service : TirageService) { }

  ngOnInit(): void {
    this.service.getTirage().subscribe(data=>{
      this.tirage= data;
  });
}

}
