import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {filterNullsAndUndefined} from '../../../shared/utils/filter-null-and-undefined';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {PaginationService} from '../../../shared/services/pagination.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-image-search-pagination',
  templateUrl: './image-search-pagination.component.html',
  styleUrls: ['./image-search-pagination.component.css']
})
export class ImageSearchPaginationComponent implements OnInit, OnDestroy{

  readonly pagination$ =  this.store.select((state) => state.imageSearch.previousResult).pipe(
	filter(filterNullsAndUndefined),
	map((result) => result.pagination));
  readonly searchQuery$ = this.store.select((state) => state.imageSearch.searchQuery).pipe(filter(filterNullsAndUndefined));
readonly subscription = new Subscription();
  currentPage = 1;

  constructor(private store: Store<AppState>, private paginationService: PaginationService) { }

  ngOnInit(): void {
  this.subscription.add(this.searchQuery$.subscribe(() => {
		this.currentPage = 1;
	}));
  }

  ngOnDestroy(): void {
	this.subscription.unsubscribe();
  }

  handlePageChange(page: number): void {
	this.currentPage = page;

	this.paginationService.setCurrentPage(this.currentPage);
  }
}
