import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import {
  AuthenticationService,
  SessionService,
} from '../../../../core/authentication/services';
import { LocalStorageService } from '../../../../shared/services/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private sessionService: SessionService,
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService
  ) {}

  login() {
    this.authenticationService
      .login(this.loginForm.value as any)
      .subscribe((userData) => {
        const { token } = userData;
        this.localStorageService.addItem('token', token);
        this.sessionService.setLoggedInStatus(true);
        this.location.back();
      });
  }
}
