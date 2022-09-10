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
@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    ListeTireComponent,
    PostulantImporterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
