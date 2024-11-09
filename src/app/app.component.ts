import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmericaCafeComponent } from './components/america-cafe/america-cafe.component';
import { OndeEstamosComponent } from './components/onde-estamos/onde-estamos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmericaCafeComponent, OndeEstamosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
