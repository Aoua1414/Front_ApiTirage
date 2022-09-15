import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListeTireComponent } from './liste-tire/liste-tire.component';
import { PostulantImporterComponent } from './postulant-importer/postulant-importer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { PageDesListesComponent } from './page-des-listes/page-des-listes.component';
import { PostulantsComponent } from './postulants/postulants.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    ListeTireComponent,
    PostulantImporterComponent,
    AccueilComponent,
    PageDesListesComponent,
    PostulantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
