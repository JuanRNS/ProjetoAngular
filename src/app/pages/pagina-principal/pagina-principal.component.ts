import { Component } from '@angular/core';
import { ProdutosServicosComponent } from '../../components/produtos-servicos/produtos-servicos.component';
import { FormsContatoComponent } from '../../components/forms-contato/forms-contato.component';
import { AmericaCafeComponent } from '../../components/america-cafe/america-cafe.component';
import { TelaPrincipalComponent } from '../../components/Header-principal/tela-principal.component';
import { MapasComponent } from '../mapas/mapas.component';
import { RederizaMapasComponent } from "../../components/rederiza-mapas/rederiza-mapas.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [ProdutosServicosComponent, FormsContatoComponent, TelaPrincipalComponent, AmericaCafeComponent, MapasComponent, FooterComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
