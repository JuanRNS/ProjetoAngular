import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  @Input() isVisible: boolean = false
  @Output() close = new EventEmitter<void>();


  closePopup(): void {
    this.isVisible = false;
    this.close.emit()
  }
}
