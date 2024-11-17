import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { ProdutosServicosComponent } from './components/produtos-servicos/produtos-servicos.component';
import { FormsContatoComponent } from './components/forms-contato/forms-contato.component';
import { MapasComponent } from './pages/mapas/mapas.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PaginaPrincipalComponent,MapasComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
