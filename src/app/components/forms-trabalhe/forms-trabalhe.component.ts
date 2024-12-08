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
    nome: 'nome',
    telefone: 'telefone',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    cidade: '',
    uf: '',
    descricao: '',
    arquivo: null as string | null
  };

  ufs = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.dados.arquivo = (reader.result as string).split(',')[1]; // Base64 sem o prefixo
      };
      reader.readAsDataURL(file); // Lê o arquivo como DataURL
    }
  }

  enviarEmail(dados: any) {
    this.emailService.enviarEmail(dados).subscribe(
      (response) => {
        console.log('Email enviado com sucesso:', response);
        alert('E-mail enviado com sucesso!');
      },
      (error) => {
        console.error('Erro ao enviar e-mail:', error);
        alert('Erro ao enviar o e-mail.');
      }
    );
  }
  onSubmit() {
    console.log(this.dados); // Verifique os dados aqui antes de enviar
    if (this.validarFormulario()) {
      this.enviarEmail(this.dados);
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
  validarFormulario(): boolean {
    return (
      this.dados.nome.trim() &&
      this.dados.email.trim() &&
      this.dados.cep.trim() &&
      this.dados.descricao.trim()
    ) ? true : false;
  }
}
