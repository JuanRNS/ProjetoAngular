import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {environment as env} from '../../../environments/environment';
@Component({
  selector: 'app-onde-estamos',
  standalone: true,
  imports: [],
  templateUrl: './onde-estamos.component.html',
  styleUrl: './onde-estamos.component.css'
})
export class OndeEstamosComponent implements OnInit,OnDestroy {
  mapa: any;

  constructor() {}

  ngOnInit(): void {
      this.mapa = L.map('mapa').setView([-8.31134802594188, -36.03589714511856], 30);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18
      }).addTo(this.mapa);
  }

  ngAfterViewInit(): void {
      this.mapa.invalidateSize();
  }

  ngOnDestroy(): void {
      this.mapa.remove();
  }
}