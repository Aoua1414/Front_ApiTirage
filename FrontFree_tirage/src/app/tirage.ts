import { ListePostulant } from "./liste-postulant";
export class Tirage {
           id_tirage!:number;
           nombre!: number ;
           libelle!:string ;
           datet!: Date;
           nbre_postulant_tire!:number;
           listePostulant!:ListePostulant;
    //libelle:string |undefined;


}
