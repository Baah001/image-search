import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {filter, map} from 'rxjs/operators';
import {filterNullsAndUndefined} from '../../../shared/utils/filter-null-and-undefined';

@Component({
  selector: 'app-search-content',
  templateUrl: './app-search-content.component.html',
  styleUrls: ['./app-search-content.component.css']
})
export class AppSearchContentComponent {
readonly previousResult$ =  this.store.select((state) => state.imageSearch.previousResult).pipe(
  filter(filterNullsAndUndefined),
  map((result) => result.data),
  map((res) => Object.values(res)));
  constructor(private store: Store<AppState>) { }
}
