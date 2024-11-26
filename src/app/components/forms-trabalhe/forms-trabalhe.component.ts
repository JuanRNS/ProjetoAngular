import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forms-trabalhe',
  standalone: true,
  imports: [],
  templateUrl: './forms-trabalhe.component.html',
  styleUrl: './forms-trabalhe.component.css'
})
export class FormsTrabalheComponent {


  constructor(private router: Router) {

  }
  paginaFormsContato() {
    this.router.navigate(['/forms-contato']);
  }

}

