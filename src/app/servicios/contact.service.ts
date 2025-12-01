import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://asper-api.onrender.com'; 

  constructor(private http: HttpClient) { }

  sendContactEmail(contactData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contactData);
  }
}
