import { Component } from '@angular/core';
import { LeafletMapComponent } from "../leaflet-map/leaflet-map.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rederiza-mapas',
  standalone: true,
  imports: [LeafletMapComponent, CommonModule, FormsModule],
  templateUrl: './rederiza-mapas.component.html',
  styleUrl: './rederiza-mapas.component.css'
})
export class RederizaMapasComponent {

  maps = [
    { id: 'map1', latitude: 51.505, longitude: -0.09, zoom: 13 },
    { id: 'map2', latitude: 40.7128, longitude: -74.006, zoom: 12 },
    { id: 'map3', latitude: -23.5505, longitude: -46.6333, zoom: 14 },
    { id: 'map4', latitude: 48.8566, longitude: 2.3522, zoom: 12 },
  ];

}
