import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelaPrincipalComponent } from './components/Header-principal/tela-principal.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ProdutosServicosComponent } from './components/produtos-servicos/produtos-servicos.component';
import { AmericaCafeComponent } from './components/america-cafe/america-cafe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaPrincipalComponent,PaginaPrincipalComponent,ProdutosServicosComponent, AmericaCafeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
