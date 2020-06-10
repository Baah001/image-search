import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {imageSearchReducer, ImageSearchState} from './image-search.reducer';
import {environment} from '../../../environments/environment';
import {ImageSearchEffects} from './image-search.effects';

export interface AppState {
  imageSearch: ImageSearchState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  imageSearch: imageSearchReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const effects = [
  ImageSearchEffects
];
