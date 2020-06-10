export interface LoadImage {
  searchQuery: string,
  sortObject: SortAble;
}

export interface LoadedImage {
data: Giph[];
pagination: Pagination;
}

interface SortAble {
  offset: number;
  // making limit optional as default is set to 25
  limit?: number
}

interface Pagination {
  total_count: number;
  count: number;
  offset: number
}

interface Giph {
  images: {
	original: {
		url: string
	}
  }
}
