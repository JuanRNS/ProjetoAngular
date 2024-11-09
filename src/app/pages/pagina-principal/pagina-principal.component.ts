import { Component } from '@angular/core';
import { ProdutosServicosComponent } from '../../components/produtos-servicos/produtos-servicos.component';
import { FormsContatoComponent } from '../../components/forms-contato/forms-contato.component';
import { TelaPrincipalComponent } from '../../components/header-principal/tela-principal.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [ProdutosServicosComponent,FormsContatoComponent,TelaPrincipalComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
