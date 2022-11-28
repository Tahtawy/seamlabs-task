import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.localStorageService.getItem('token');

    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'application/json'),
        withCredentials: true,
      });
    }

    return next.handle(request);
  }
}
