import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-tirageliste',
  templateUrl: './tirageliste.component.html',
  styleUrls: ['./tirageliste.component.scss']
})
export class TiragelisteComponent implements OnInit {

  tirage:any;
  constructor(private service : TirageService) { }

  ngOnInit(): void {

    this.service.getTirage().subscribe(data=>{
      this.tirage= data;
  });
  }

}
