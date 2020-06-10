import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {filterNullsAndUndefined} from '../../../shared/utils/filter-null-and-undefined';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {PaginationService} from '../../../shared/services/pagination.service';

@Component({
  selector: 'image-search-pagination',
  templateUrl: './image-search-pagination.component.html',
  styleUrls: ['./image-search-pagination.component.css']
})
export class ImageSearchPaginationComponent implements OnInit{

  readonly pagination$ =  this.store.select((state) => state.imageSearch.previousResult).pipe(
	filter(filterNullsAndUndefined),
	map((result) => result.pagination));

  currentPage = 1;

  constructor(private store: Store<AppState>, private paginationService: PaginationService) { }

  ngOnInit(): void {

  }

  handlePageChange(page: number): void {
	this.currentPage = page;

	this.paginationService.setCurrentPage(this.currentPage);
  }
}
