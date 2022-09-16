import { Component, OnInit } from '@angular/core';
import { PostulantService } from '../postulant.service';

@Component({
  selector: 'app-postulants',
  templateUrl: './postulants.component.html',
  styleUrls: ['./postulants.component.scss']
})
export class PostulantsComponent implements OnInit {

  postulants:any;
  page:number=1;
  constructor(private service: PostulantService) { }

  ngOnInit(): void {
    this.service.getPostulant().subscribe(data=>{
      //console.log(data)
      this.postulants = data;
  });

  }
}

