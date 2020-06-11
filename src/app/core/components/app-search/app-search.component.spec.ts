import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppSearchComponent} from './app-search.component';
import {HttpClientModule} from '@angular/common/http';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

describe('AppSearchComponent', () => {
  let component: AppSearchComponent;
  let store: MockStore;
  let fixture: ComponentFixture<AppSearchComponent>;
const initialState = {};
  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [AppSearchComponent],
		providers: [HttpClientModule,
		provideMockStore({ initialState })]
	})
		.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(AppSearchComponent);
	component = fixture.componentInstance;
	store = TestBed.inject(MockStore);
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });

  it('should not run if query contains profanity by disabling button', () => {
	component.searchForm.get('searchQuery').setValue('fuck');
	expect(component.searchForm.valid).toBe(false);
  });

  it('should run if query does not contain profanity', () => {
	component.searchForm.get('searchQuery').setValue('house');
	expect(component.searchForm.valid).toBe(true);
  });

  it('should return the proper offset', () => {
	let offset;
		offset = component.calcOffset(55);
	expect(offset).toBe(1350);

	 offset = component.calcOffset(1);
	expect(offset).toBe(0);
  });
});
