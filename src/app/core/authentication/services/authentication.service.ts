import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClientInstanceService } from '../../../shared/services';
import { LoginCredentials, UserData } from '../../../data/models';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClientInstanceService: HttpClientInstanceService) {}

  login(credentials: LoginCredentials): Observable<UserData> {
    const { username, password } = credentials;

    /**
     * dummyjson uses these credentials from static users
     */
    return this.httpClientInstanceService.post('/auth/login', {
      username: 'kminchelle',
      password: '0lelplR',
    });
  }
}
