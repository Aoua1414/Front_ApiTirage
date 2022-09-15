import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-page-des-listes',
  templateUrl: './page-des-listes.component.html',
  styleUrls: ['./page-des-listes.component.scss']
})
export class PageDesListesComponent implements OnInit {


  tirage:any;
  ListeTirage:any;
  constructor(private service : TirageService, private route:ActivatedRoute) { }

  ngOnInit(): void {
      const id_liste= +this.route.snapshot.params["id_liste"];
  this.service.TrouveTirageParListe(id_liste).subscribe(data=>{
    this.ListeTirage=data
    console.log("voir si ca marche " + this.ListeTirage[0].nombre)
  });
    this.service.getTirage().subscribe(data=>{
      this.tirage= data;
  })


}

}
