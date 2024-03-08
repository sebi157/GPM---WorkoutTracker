import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  verifyIdToken(idToken: string) {
    const url = 'YOUR_BACKEND_ENDPOINT_TO_VERIFY_ID_TOKEN';
    return this.http.post(url, { token: idToken });
  }
}
