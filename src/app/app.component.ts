import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { ProdutosServicosComponent } from './components/produtos-servicos/produtos-servicos.component';
import { FormsContatoComponent } from './components/forms-contato/forms-contato.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { PromocoesComponent } from './components/promocoes/promocoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PaginaPrincipalComponent,MapasComponent, PromocoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
