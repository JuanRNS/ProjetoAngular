import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-tela-principal',
  standalone: true,
  imports: [],
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
}