import { Component, OnInit } from '@angular/core';
import {faHome,faDice,faList } from '@fortawesome/free-solid-svg-icons'
import { Tirage } from '../tirage';
@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

  public tirage: Tirage = new Tirage();
  constructor() { }

  ngOnInit(): void {
  }
  
}
