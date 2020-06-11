import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinksHttpClientService {
  static readonly defaultOptions: AppRequestOptions = { headers: new HttpHeaders({ Accept: 'application/json' }) };
  readonly isLoadingSubject = new Subject();
  readonly isLoading$ = this.isLoadingSubject.asObservable();
  constructor(readonly defaultHttpClient: HttpClient) { }

  get<T>(path: string, options?: AppRequestOptions): Observable<T> {
	return this.defaultHttpClient.get<T>(path, { ...LinksHttpClientService.defaultOptions, ...options }).pipe(
	  tap(() => this.isLoadingSubject.next(true)),
	finalize(() => this.isLoadingSubject.next(false)))
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
