import { Component } from '@angular/core';
import { LoginComponent } from '../../components/tela-padrao/tela-padrao.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [LoginComponent,FormsModule,ReactiveFormsModule,InputsComponent],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
  loginForm! :FormGroup;

  constructor(private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  navegar() {
    this.router.navigate(['/cadastro']);
  }
}
