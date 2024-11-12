import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  @Input() latitude:number = 0;
  @Input() longitude:number = 0;  
  @Input() zoom:number = 13;
  @Input() tileLayerUrl:string = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  constructor() { }

  mapa!: L.Map;
  
  ngOnInit(): void {
    this.inicializarMapa();
  }

  ngAfterViewInit(): void {
    this.mapa.invalidateSize();
  }

  ngOnDestroy(): void {
    this.mapa.remove();
  }

  private inicializarMapa(): void {
    this.mapa = L.map('mapa').setView([this.latitude, this.longitude], this.zoom);

    L.tileLayer(this.tileLayerUrl, {
      maxZoom: 18,
    }).addTo(this.mapa);

    L.marker([this.latitude, this.longitude]).addTo(this.mapa);
  }
}


