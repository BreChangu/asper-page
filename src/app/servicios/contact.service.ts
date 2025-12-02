import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // URL base de tu backend
  private apiUrl = 'https://asper-api.onrender.com'; 

  constructor(private http: HttpClient) { }

  sendContactEmail(contactData: any): Observable<any> {
    // CORRECCIÓN: Agregamos '/send-email' para que coincida con tu app.post('/send-email') del backend
    return this.http.post<any>(`${this.apiUrl}/send-email`, contactData);
  }
}