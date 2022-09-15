import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeTireComponent } from './liste-tire/liste-tire.component';
import { PageDesListesComponent } from './page-des-listes/page-des-listes.component';
import { PostulantImporterComponent } from './postulant-importer/postulant-importer.component';
import { PostulantsComponent } from './postulants/postulants.component';
import { TirageComponent } from './tirage/tirage.component';
import { TiragelisteComponent } from './tirageliste/tirageliste.component';

const routes: Routes = [
{
  path:"detail/:id_liste",
  component:PageDesListesComponent
},
  
  {
    path:"tirage",
    component:TirageComponent
  },
  {
    path:"detail",
    component:ListeTireComponent
  },
 {
    path:"accueil",
    component:AccueilComponent
  },
{
  path:"importer",
  component:PostulantImporterComponent
},
{
  path:"listes",
  component:PageDesListesComponent
},
{
  path:"postulants",
  component:PostulantsComponent
},
{
  path:"Liste",
  component:TiragelisteComponent
},
  {
    path:"",
    redirectTo:"accueil",
    pathMatch:'full'
  }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
