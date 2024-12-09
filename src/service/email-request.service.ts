import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailRequestService {

  private apiUrl = 'http://localhost:3001/send ';
  
  constructor(private http: HttpClient) { }

  enviarEmail(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados)
      .pipe(
        catchError(error => {
          console.error('Erro ao enviar o e-mail', error);
          throw error;
        })
      );
  }
}
