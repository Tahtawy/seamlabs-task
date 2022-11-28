import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpClientInstanceService {
  apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(`${this.apiBaseUrl}${url}`, { params });
  }

  post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${this.apiBaseUrl}${url}`, body);
  }

  put(url: string, body: any): Observable<any> {
    return this.httpClient.put(`${this.apiBaseUrl}${url}`, body);
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(`${this.apiBaseUrl}${url}`);
  }
}
