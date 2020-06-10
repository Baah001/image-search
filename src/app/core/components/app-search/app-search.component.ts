import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {LoadImageSearchAction} from '../../state/image-search.action';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {PaginationService} from '../../../shared/services/pagination.service';
import {debounceTime, filter, map, switchMap, take, tap} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {filterNullsAndUndefined} from '../../../shared/utils/filter-null-and-undefined';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  readonly searchQuery =  this.store.select((state) => state.imageSearch.searchQuery)
readonly searchForm = new FormGroup({
  searchQuery: new FormControl()
});

  constructor(private store: Store<AppState>, private paginationService: PaginationService) { }

  ngOnInit(): void {
	this.paginationService.currentPage$.pipe(
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
	).subscribe();

  }
  onSubmit(): void {
	const {searchQuery} = this.searchForm.value;

  this.loadSearch(searchQuery);
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
