import { Component } from '@angular/core';
import { LoginComponent } from '../../components/tela-padrao/login.component';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [LoginComponent,InputsComponent,ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm!: FormGroup;
    constructor(
      private router: Router,
      private http: HttpClient
    ){
      this.cadastroForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
      })
    }

    submit(): void{
      this.http.post('http://localhost:3001/register', this.cadastroForm.value).subscribe(res => {
        console.log(res);
      });

    }
    navegar (){
      this.router.navigate(['/login']);
    } 
}
