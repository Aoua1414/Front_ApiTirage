import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Import } from '../import';
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

//Methode pour importer fichier
  libelleListe:string = "";
  formmodule!:FormGroup;
  file:any;
  fichierImport:Import = new Import();
  


  constructor(public service :ListePostulantService, 
    private formB: FormBuilder,
    private serviceTirage: TirageService) { }

  ngOnInit(): void {

//Methode pour importer fichier
  this.formmodule = this.formB.group({
    libelle:["", Validators.required],
    fichierImport:["", Validators.required]
  })


   this.service.getListe().subscribe(data=>{

    //console.log(data)

    this.listePost = data;
  });


}


//Methode pour importer fichier
//debut
fileChange(e:any){
  this.file = e.target["files"][0]
}

importerListe(){
  this.fichierImport = this.formmodule.value;
  console.log(this.fichierImport.libelle)
  this.serviceTirage.getImpoter(this.fichierImport.libelle, this.file).subscribe(data =>{
    this.formmodule.reset();
  })
}
//fin
onSubmit(){

  console.log(this.choix)
  this.serviceTirage.CreerTirage(this.tirage, this.choix, this.tirage.nombre).subscribe(data=>{
    console.log(data);
    if(data=="Tirage effectué avec succès"){
      alert("Tirage effectue avec succes")
    }else if(data=="Ce tirage exixte dejà"){
      alert("Ce tirage existe deja")

    }else{
      alert("Erreur lors du tirage")

    }
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
