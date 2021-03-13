
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface EmailInfo {
  id?: string;
  subject?: string;
  from?: string;
}

export interface EmailDetails {
  id: string;
  subject: string;
  text: string;
  to: string;
  from: string;
  html: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  emailUrl = "https://api.angular-email.com";
  constructor(private httpClient: HttpClient) { }

  getEmails(): Observable<EmailInfo[]> {
    return this.httpClient.get<EmailInfo[]>(`${this.emailUrl}/emails`,{ withCredentials: true})
  }

  getEmailById(id: string): Observable<EmailDetails> {
    return this.httpClient.get<EmailDetails>(`${this.emailUrl}/emails/${id}`,{ withCredentials: true})
  }
}
