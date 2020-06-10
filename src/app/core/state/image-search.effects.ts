import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {filter, map, switchMap} from 'rxjs/operators';
import {LoadedImageSearch, LoadImageSearchAction, LoadImageSearchActionTypes} from './image-search.action';
import {LinksHttpClientService} from '../../shared/services/links-http-client.service';
import {HttpParams} from '@angular/common/http';
import {pickBy} from 'lodash-es';
import {notNullOrUndefined} from '../../shared/utils/not-null-and-undefined';
import {LoadedImage} from '../interfaces/load-image.interface';

@Injectable()
export class ImageSearchEffects {
  @Effect() readonly about$ = this.actions$.pipe(
	ofType(LoadImageSearchActionTypes.LoadImageSearch),
	filter((action) => this.filterBadWords(action)),
	switchMap((action: LoadImageSearchAction) => {
	  const {sortObject, searchQuery} = action.payload;

	const params = new HttpParams({
		fromObject: pickBy({ ...sortObject, q: searchQuery, api_key: 'CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6' },
		notNullOrUndefined) as { [param: string]: string | string[] },
	});
	  const options = {...LinksHttpClientService.defaultOptions};
	  const endPoint = 'http://api.giphy.com/v1/gifs/search';
	  options.params = params;

	return this.httpService.get(endPoint, options)
  }),
	map((response: LoadedImage) => new LoadedImageSearch({data: response.data, pagination: response.pagination})),
  );

  constructor(private readonly actions$: Actions, private readonly httpService: LinksHttpClientService) {}

   filterBadWords(action: LoadImageSearchAction): boolean {
		const options = {...LinksHttpClientService.defaultOptions};
		const endPoint = '/api';

	this.httpService.post(endPoint, action.payload.searchQuery, options).subscribe();
	return true
  }
}
