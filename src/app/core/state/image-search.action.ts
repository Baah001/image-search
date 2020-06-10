import { Action } from '@ngrx/store';
import {LoadedImage, LoadImage} from '../interfaces/load-image.interface';

export enum LoadImageSearchActionTypes {
  LoadImageSearch = '[LoadImageSearch] Load images search',
  LoadedImageSearch = '[LoadImageSearch] Loaded image search',
}

// Search Image
export class LoadImageSearchAction implements Action {
  readonly type = LoadImageSearchActionTypes.LoadImageSearch;

  constructor(readonly payload: LoadImage) {}
}
export class LoadedImageSearch implements Action {
  readonly type = LoadImageSearchActionTypes.LoadedImageSearch;

  constructor(readonly payload: LoadedImage) {}
}

export type LoadImageActions =
  | LoadImageSearchAction
| LoadedImageSearch;
