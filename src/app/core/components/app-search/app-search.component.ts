import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoadImageSearchAction} from '../../state/image-search.action';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {PaginationService} from '../../../shared/services/pagination.service';
import {debounceTime, filter, map, switchMap, take, tap} from 'rxjs/operators';
import {combineLatest, Subscription} from 'rxjs';
import {filterNullsAndUndefined} from '../../../shared/utils/filter-null-and-undefined';
import {isNotProfane} from '../../validators/image-search-validator';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit, OnDestroy {
  readonly searchQuery =  this.store.select((state) => state.imageSearch.searchQuery)
readonly searchForm = new FormGroup({
  searchQuery: new FormControl(null, [isNotProfane(), Validators.required])
});

  readonly subscriptions = new Subscription();

  constructor(private store: Store<AppState>, private paginationService: PaginationService) { }

  ngOnInit(): void {
	this.subscriptions.add( this.paginationService.currentPage$.pipe(
	  debounceTime(400),
		switchMap((currentPage) => {
		  return this.searchQuery.pipe(
		    filter((query) => !!query),
		map((query) => [query, currentPage]));

		}),
  tap(([searchQuery, currentPage]: [string, number]) => {
	const offset = this.calcOffset(currentPage);
	this.loadSearch(searchQuery, offset)
  })
	).subscribe());
  }

  ngOnDestroy(): void {
	this.subscriptions.unsubscribe();
  }

  onSubmit(): void {
	const {searchQuery} = this.searchForm.value;

  this.loadSearch(searchQuery, 0);
  }

  loadSearch(searchQuery: string, offset = 0, limit?:number): void {

	this.store.dispatch(new LoadImageSearchAction({
		sortObject: {
		  offset,
		limit
		},
		searchQuery
	}));
  }

  calcOffset(currentPage: number):number {
   return currentPage !== 1 ? (currentPage -1) * 25 : 0
  }

}
