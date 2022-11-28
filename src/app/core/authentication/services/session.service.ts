import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LocalStorageService } from '../../../shared/services';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  isLoggedIn$ = new BehaviorSubject(false);

  constructor(private localStorageService: LocalStorageService) {}

  setLoggedInStatus(status: boolean) {
    this.isLoggedIn$.next(status);
  }

  getLoggedInStatus() {
    const token = this.localStorageService.getItem('token');

    if (token) {
      this.isLoggedIn$.next(true);
    } else {
      this.isLoggedIn$.next(false);
    }
  }

  signOut() {
    this.localStorageService.deleteItem('token');
    this.isLoggedIn$.next(false);
  }
}
