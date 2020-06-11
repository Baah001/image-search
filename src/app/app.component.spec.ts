import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ImageSearchBaseComponent} from './core/components/image-search-base/image-search-base.component';
import {SpinnerComponent} from './core/components/spinnner/spinner.component';
import {HttpClientModule} from '@angular/common/http';
import {ImageSearchPaginationComponent} from './core/components/image-search-pagination/image-search-pagination.component';
import {AppSearchContentComponent} from './core/components/app-search-content/app-search-content.component';
import {AppSearchComponent} from './core/components/app-search/app-search.component';
import {provideMockStore} from '@ngrx/store/testing';
describe('AppComponent', () => {
  const initialState = {previousResult: []};
  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [
		AppComponent,
		ImageSearchBaseComponent,
		SpinnerComponent,
		ImageSearchPaginationComponent,
		AppSearchContentComponent,
		AppSearchComponent
		],
	providers: [
		provideMockStore({ initialState })
	],
	imports: [HttpClientModule,]
	}).compileComponents();
  }));
  it('should create the app', async(() => {
	const fixture = TestBed.createComponent(AppComponent);
	const app = fixture.debugElement.componentInstance;
	expect(app).toBeTruthy();
  }));
});
