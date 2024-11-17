import { AfterViewInit, Component, Input } from '@angular/core';
import L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.css'
})
export class LeafletMapComponent implements AfterViewInit{
  @Input() mapId!: string;
  @Input() latitude: number = 0;
  @Input() longitude: number = 0;
  @Input() zoom: number = 13;
  @Input() text: string ='';

  private map!: L.Map;

  ngAfterViewInit(): void {
    if (!this.mapId) {
      console.error('O mapId é obrigatório!');
      return;
    }

    this.map = L.map(this.mapId).setView([this.latitude, this.longitude], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
    L.marker([this.latitude, this.longitude]).addTo(this.map);
  }
}
