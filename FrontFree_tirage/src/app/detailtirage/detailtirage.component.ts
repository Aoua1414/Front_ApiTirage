import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListetiréService } from '../listetiré.service';

@Component({
  selector: 'app-detailtirage',
  templateUrl: './detailtirage.component.html',
  styleUrls: ['./detailtirage.component.scss']
})
export class DetailtirageComponent implements OnInit {
  posttires!:any
  page:number=1;

  constructor(private service : ListetiréService,  private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id_tirage= +this.route.snapshot.params["idTirage"];
    this.service.getPostulanttireTirage(id_tirage).subscribe(data=>{
      this.posttires= data;

      
      console.log(data)
  });
  }

}
