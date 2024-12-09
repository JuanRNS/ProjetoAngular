import { Component, Inject } from '@angular/core';
import { LoginComponent } from '../../components/tela-padrao/login.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputsComponent } from '../../components/inputs/inputs.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [LoginComponent,FormsModule,ReactiveFormsModule,InputsComponent],
  templateUrl: './tela-login.component.html',
  styleUrl: './tela-login.component.css'
})
export class TelaLoginComponent {
  loginForm! :FormGroup;

  constructor(private router: Router,
    private http: HttpClient
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  submit(): void{
    this.http.post('http://localhost:3001/login', this.loginForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/forms-trabalhe']);
    })
  }
  navegar() {
    this.router.navigate(['/cadastro']);
  }
}
