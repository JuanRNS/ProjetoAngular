import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';
import { EmailRequestService } from '../../../service/email-request.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-forms-trabalhe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forms-trabalhe.component.html',
  styleUrl: './forms-trabalhe.component.css'
})
export class FormsTrabalheComponent {

  constructor(  private emailService: EmailRequestService) { }
  dados = {
    nome: '',
    telefone: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    descricao: '',
    arquivo: null
  };

  ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  onSubmit() {
    this.enviarEmail(this.dados);
  }
  onFileChange(event: any) {
    const file = event.target.files[0]; 
    this.dados.arquivo = file;  
  }

  enviarEmail(dados:any){
    this.emailService.enviarEmail(dados).subscribe();
  }
}
