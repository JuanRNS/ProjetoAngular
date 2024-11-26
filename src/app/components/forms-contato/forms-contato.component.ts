import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-contato',
  standalone: true,
  imports: [],
  templateUrl: './forms-contato.component.html',
  styleUrl: './forms-contato.component.css'
})
export class FormsContatoComponent {


  constructor(private router: Router){

  } 
  paginaFormsContato(){
     this.router.navigate(['/forms-contato']);
  }
 
}
