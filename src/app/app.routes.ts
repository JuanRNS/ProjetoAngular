import { Routes } from '@angular/router';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { RederizaMapasComponent } from './components/rederiza-mapas/rederiza-mapas.component';
import { FormsContatoComponent } from './components/forms-contato/forms-contato.component';
import { FormsTrabalheComponent } from './components/forms-trabalhe/forms-trabalhe.component';

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'forms-trabalhe', component: FormsTrabalheComponent },
];
