import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { MapasComponent } from '../mapas/mapas.component';
<<<<<<< HEAD
import { RederizaMapasComponent } from "../../components/rederiza-mapas/rederiza-mapas.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router, RouterOutlet } from '@angular/router';
import { PromocoesComponent } from '../../components/promocoes/promocoes.component';
=======
>>>>>>> 059bd5a228d65b56f0c8a49b54eceddb5aacae1f

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
<<<<<<< HEAD
  imports: [ FormsContatoComponent, TelaPrincipalComponent, MapasComponent, RouterOutlet],
=======
  imports: [CommonModule,PopUpComponent,MapasComponent],
>>>>>>> 059bd5a228d65b56f0c8a49b54eceddb5aacae1f
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  constructor(private router: Router) {

  }

  promocoes(){
    this.router.navigate(['promocoes'])
  }

  isPopupVisible:boolean[] = Array(8).fill(false);



  openPopup(index: number): void {
    this.isPopupVisible[index] = true;
  }

  closePopup(index: number): void {
    this.isPopupVisible[index] = false;
  }
}
