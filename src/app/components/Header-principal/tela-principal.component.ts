import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormsContatoComponent } from '../forms-contato/forms-contato.component';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [FormsContatoComponent],
  templateUrl: './tela-principal.component.html',
  styleUrl: './tela-principal.component.css'
})
export class TelaPrincipalComponent {
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