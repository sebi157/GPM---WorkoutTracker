import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initGoogleSignIn();
  }

  initGoogleSignIn(): void {
    window.onload = () => {
      google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: (response: any) => this.handleCredentialResponse(response),
      });
      google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' },
      );
      google.accounts.id.prompt();
    };
  }

  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token: ' + response.credential);
    this.authService.verifyIdToken(response.credential).subscribe({
      next: (res: any) => {
        console.log('Token verified successfully', res);
      },
      error: (err: any) => {
        console.error('Token verification failed', err);
      },
    });
  }
}
