import { Routes } from '@angular/router';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { RederizaMapasComponent } from './components/rederiza-mapas/rederiza-mapas.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'mapa', component: RederizaMapasComponent },
  { path: 'promocoes', component: PromocoesComponent },
];
