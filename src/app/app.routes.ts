import { Routes } from '@angular/router';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { RederizaMapasComponent } from './components/rederiza-mapas/rederiza-mapas.component';
import { FormsContatoComponent } from './components/forms-contato/forms-contato.component';
import { FormsTrabalheComponent } from './components/forms-trabalhe/forms-trabalhe.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';
import { LoginComponent } from './components/tela-padrao/tela-padrao.component';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


export const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'forms-trabalhe', component: FormsTrabalheComponent },
  { path: 'mapa', component: RederizaMapasComponent },
  { path: 'promocoes', component: PromocoesComponent },
];
