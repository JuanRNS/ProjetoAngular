import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { MapasComponent } from '../mapas/mapas.component';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CommonModule,PopUpComponent,MapasComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

  isPopupVisible:boolean[] = Array(8).fill(false);



  openPopup(index: number): void {
    this.isPopupVisible[index] = true;
  }

  closePopup(index: number): void {
    this.isPopupVisible[index] = false;
  }
}
