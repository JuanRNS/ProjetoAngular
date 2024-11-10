import { Component } from '@angular/core';
import { OndeEstamosComponent } from '../../components/onde-estamos/onde-estamos.component';

@Component({
  selector: 'app-mapas',
  standalone: true,
  imports: [OndeEstamosComponent],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {

}
