import { Component } from '@angular/core';
import { RederizaMapasComponent } from "../../components/rederiza-mapas/rederiza-mapas.component";

@Component({
  selector: 'app-mapas',
  standalone: true,
  imports: [RederizaMapasComponent],
  templateUrl: './mapas.component.html',
  styleUrl: './mapas.component.css'
})
export class MapasComponent {

}
