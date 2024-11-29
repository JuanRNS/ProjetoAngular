import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormsContatoComponent } from '../forms-contato/forms-contato.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [FormsContatoComponent],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent {

  constructor(private router: Router ){}


  formsTrabalho(){
    this.router.navigate(['/forms-trabalhe']);
  }
  paginaPrincipal(){
    this.router.navigate(['/']);
  }
  americaCafe(){
    document.getElementById('america')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  produtosServicos(){
    document.getElementById('produtos-servicos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  ondeEstamos(){
    document.getElementById('onde-estamos')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngAfterViewInit(): void {
    const btnAbrirMenu = document.getElementById('btn-abrir-menu');
    const menuMobile = document.querySelector('.menu-mobile');

    if (btnAbrirMenu && menuMobile) {
      btnAbrirMenu.addEventListener('click', () => {
        menuMobile.classList.add('abrir-menu');

        menuMobile.addEventListener('click', () => {
          menuMobile.classList.remove('abrir-menu');
        });
      }
      );
    }
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}