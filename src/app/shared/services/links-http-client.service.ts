import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksHttpClientService {
  static readonly defaultOptions: AppRequestOptions = { headers: new HttpHeaders({ Accept: 'application/json' }) };
  constructor(readonly defaultHttpClient: HttpClient) { }

  get<T>(path: string, options?: AppRequestOptions): Observable<T> {
	return this.defaultHttpClient.get<T>(path, { ...LinksHttpClientService.defaultOptions, ...options });
  }

  post<T>(path: string, body: any | null, options?: AppRequestOptions): Observable<T> {
	return this.defaultHttpClient.post<T>(path, body, { ...LinksHttpClientService.defaultOptions, ...options });
  }
}

interface RequestOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
  body?: any;
}

export interface AppRequestOptions extends RequestOptions {
  responseType?: 'json';
  observe?: 'body';
}
