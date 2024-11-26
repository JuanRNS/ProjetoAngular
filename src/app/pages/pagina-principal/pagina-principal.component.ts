import { Component } from '@angular/core';
import { FormsContatoComponent } from '../../components/forms-contato/forms-contato.component';
import { TelaPrincipalComponent } from '../../components/Header-principal/tela-principal.component';
import { MapasComponent } from '../mapas/mapas.component';
import { RederizaMapasComponent } from "../../components/rederiza-mapas/rederiza-mapas.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [ FormsContatoComponent, TelaPrincipalComponent, MapasComponent, CommonModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  isPopupVisible = false;

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }
}
