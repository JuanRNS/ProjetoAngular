import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() title = '';
  @Input() primaryBtnText = '';
  @Input() secondaryBtnText = '';
  
  @Output("navegar") onNavegar = new EventEmitter();

  @Output("submit") onSubmit = new EventEmitter();
  submit(){
    this.onSubmit.emit();
  }
  navegar() {
    this.onNavegar.emit();
  }
}
