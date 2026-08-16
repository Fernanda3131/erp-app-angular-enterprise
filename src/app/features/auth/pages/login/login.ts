import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  email = '';
  password = '';

  constructor(
    private auth: Auth
  ) {}

  login() {

    this.auth.login(
      this.email,
      this.password
    ).subscribe({

      next: (response) => {

        console.log(
          'Login exitoso:',
          response
        );

        this.auth.saveSession(response);

        console.log(
          'Token guardado:',
          this.auth.getToken()
        );

        console.log(
          'Usuario guardado:',
          this.auth.getUser()
        );

      },

      error: (error) => {

        console.error(
          'Error de login:',
          error
        );

      }

    });

  }
}