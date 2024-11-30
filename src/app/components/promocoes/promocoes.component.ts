import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-promocoes',
  standalone: true,
  imports: [FooterComponent, RouterOutlet],
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.css',

})
export class PromocoesComponent {

}
