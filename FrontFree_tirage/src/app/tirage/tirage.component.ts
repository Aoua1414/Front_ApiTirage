import { Component, OnInit } from '@angular/core';
import {faHome,faDice,faList } from '@fortawesome/free-solid-svg-icons'
import { ListePostulantService } from '../liste-postulant.service';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

   tirage:Tirage = new Tirage();
  listePost:any;
  //Pour recuperer les attributs de tirage
  tirages!:Tirage[];
  choix:any;
  nombre:any;
  constructor(private service :ListePostulantService, private serviceTirage: TirageService) { }

  ngOnInit(): void {

   this.service.getListe().subscribe(data=>{
    console.log(data)
    this.listePost = data;
  });


}
onSubmit(){
  console.log(this.choix)
  this.serviceTirage.CreerTirage(this.tirage, this.choix, this.tirage.nombre).subscribe(data=>{
   
   })
 }
 //Pour creer un popup
 //private modaService: NgbModal
//  closeResult!: string;

// open(content:any) {
//   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
//     this.closeResult = Closed with: ${result};
//   }, (reason) => {
//     this.closeResult = Dismissed ${this.getDismissReason(reason)};
//   });
// }

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     return 'by clicking on a backdrop';
//   } else {
//     return  with: ${reason};

// }
// }
}
