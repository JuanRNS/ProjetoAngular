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
  quebralinha: string = '<br>';

  maps = [
    {
      id: 'map1',
      latitude: -8.1189948,
      longitude: -35.2603978,
      zoom: 16,
      text: 'América Vitória de Santo Antão. BR 232, KM 36,5, S/N, Redenção, Vitoria de Santo Antão'
    },
    { id: 'map2', 
      latitude: -8.053219292633537,  
      longitude: -34.891869357520676, 
      zoom: 16,
      text: 'América Soledade. Rua João Fernandes Vieira, Número 386, Soledade, Recife'
     },
    { id: 'map3', 
      latitude: -8.169908015099269, 
      longitude: -34.9153254085327, 
      zoom: 16, 
      text: 'Av. Bernardo Vieira de Melho, Número 1905, Piedade, Jaboatão dos Guararapes'
    },
    { id: 'map4', 
      latitude: -10.823376211210311,  
      longitude: -42.72505536589411,
       zoom: 16,
       text: 'América Xique Xique. Rua Projetada, Número 107, Andorinha'
      },
    { id: 'map5', 
      latitude: -8.286825858132516, 
      longitude: -35.97330938567203,
       zoom: 16,
       text: 'América Centro. Rua Professor Augusto Tabosa, Número 49, Nossa Senhora das Dores'
      },
    { id: 'map6', 
      latitude: -8.288148688660607, 
      longitude: -36.00828768642336,
       zoom: 16,
       text: 'Av. Leão Dourado, Número 2365, Kennedy'
      },
    { id: 'map7', 
      latitude: -8.28080752710996, 
      longitude: -35.93667993558604,
       zoom: 16,
       text: 'América Rendeiras. Rua Valdemir Bezerra da Silva, Número 05, Rendeiras' 
      },
    { id: 'map8', 
      latitude: -8.287917148331237,  
      longitude: -35.98481350510398,
       zoom: 16,
       text: 'Américia Leão Dourado. Av. Leão Dourado, Número 382, Caiuca'
      },
    { id: 'map9', 
      latitude: -8.26174260399012,  
      longitude: -35.95772968022331,
       zoom: 16,
       text: 'América Av Brasil. Av. Brasil, Número 1440, Universitário, Caruaru' 
      },
    { id: 'map10', 
      latitude: -8.276136720952698,  
      longitude: -35.98018880765017,
       zoom: 16,
       text: 'América Via parque. Av. Rui Barbosa, Número 823, Divinópolis, Caruaru' 
      },
    { id: 'map11', 
      latitude: -8.45548168002338,  
      longitude: -35.94448358910966,
       zoom: 16,
       text: 'América BR 104. Rod. BR 104, KM 80, S/N, Centro, Agrestina' 
      },
    { id: 'map12', 
      latitude: -8.31133452696136,  
      longitude: -36.03589182059924,
       zoom: 16,
       text: 'América 232. Rod. BR 232, KM 135,5, S/N, Petrópolis, Caruaru' 
      },
    { id: 'map13', 
      latitude: -8.270774874855256,  
      longitude: -35.981297226043445,
       zoom: 16,
       text: 'América Juriti. Rod. BR 104, KM 60, Zona Rural, Caruaru'
      },
    { id: 'map14', 
      latitude: -8.363484902589803,  
      longitude: -36.55859168174981,
       zoom: 16,
       text: 'América Sanharó. Rod. BR 232, KM 95, S/N, Zona Rural, Sanharó'
      },
    { id: 'map15', 
      latitude: -8.343305312993976, 
      longitude: -36.433271293352426,
       zoom: 16,
       text: 'América Belo Jardim. Av. Oscar Pereira da Silva, Número 364, Santo Antonio, Belo Jardim'
      },
  ];

}
