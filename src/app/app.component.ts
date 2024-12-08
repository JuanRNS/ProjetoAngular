import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TelaPrincipalComponent } from "./components/Header-principal/tela-principal.component";
import { PaginaPrincipalComponent } from "./pages/pagina-principal/pagina-principal.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, TelaPrincipalComponent, PaginaPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}