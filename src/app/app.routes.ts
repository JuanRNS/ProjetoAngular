import { Routes } from '@angular/router';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { RederizaMapasComponent } from './components/rederiza-mapas/rederiza-mapas.component';
import { FormsContatoComponent } from './components/forms-contato/forms-contato.component';
import { FormsTrabalheComponent } from './components/forms-trabalhe/forms-trabalhe.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forms-trabalhe', component: FormsTrabalheComponent },
  { path: 'mapa', component: RederizaMapasComponent },
  { path: 'promocoes', component: PromocoesComponent },
];
