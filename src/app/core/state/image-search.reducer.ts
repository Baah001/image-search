import {LoadImageActions, LoadImageSearchActionTypes} from './image-search.action';

export interface ImageSearchState {
  searchQuery?: string,
  previousResult?: any;
}

export const initialState: ImageSearchState = {
  searchQuery: '',
  previousResult: undefined
};

export function imageSearchReducer(state = initialState, action: LoadImageActions): ImageSearchState {
  switch (action.type) {
	case LoadImageSearchActionTypes.LoadImageSearch:

	// limit, skip, sortModels,
		const {  searchQuery } =  action.payload;
		return {
		...state,
		searchQuery,
		};

	case LoadImageSearchActionTypes.LoadedImageSearch:
	// const {  searchQuery } =  action.payload;
		return {
		...state,
		previousResult: { ...action.payload },
		};

	default:
		return state;
  }
}
