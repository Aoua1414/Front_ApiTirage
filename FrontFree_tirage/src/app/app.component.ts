import { Component, OnInit } from '@angular/core';
import {faDice, faHome, faList, faFileImport, faEye} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Free_tirage';
   
  home=faHome;
  tirage=faDice;
  liste=faList;
  listee=faList;
  listeee=faList;
  importe=faFileImport;
  eyes=faEye;
}
