import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailRequestService {

  private apiUrl = 'http://localhost:8080/send_email.php'

  constructor(private http: HttpClient) { }

  enviarEmail(dados: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, dados);
  }
}
