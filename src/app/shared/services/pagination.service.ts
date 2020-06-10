import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  readonly currentPageSubject = new Subject<number>();
  readonly currentPage$ = this.currentPageSubject.asObservable();

  constructor() { }

  setCurrentPage(page: number): void {
	this.currentPageSubject.next(page);
  }

}
