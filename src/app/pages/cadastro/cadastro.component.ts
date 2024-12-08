import { Component } from '@angular/core';
import { LoginComponent } from '../../components/tela-padrao/tela-padrao.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [LoginComponent,InputsComponent,ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm!: FormGroup;
    constructor(private router: Router){
      this.cadastroForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      })
    }

    navegar (){
      this.router.navigate(['/login']);
    } 
}
