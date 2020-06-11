import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchContentComponent } from './app-search-content.component';
import {provideMockStore} from '@ngrx/store/testing';

xdescribe('AppSearchContentComponent', () => {
  let component: AppSearchContentComponent;
  let fixture: ComponentFixture<AppSearchContentComponent>;
  const initialState = {previousResult: []};
  beforeEach(async(() => {
	TestBed.configureTestingModule({
		declarations: [ AppSearchContentComponent ],
		providers: [
		  provideMockStore({ initialState })
	]
	})
	.compileComponents();
  }));

  beforeEach(() => {
	fixture = TestBed.createComponent(AppSearchContentComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it('should create', () => {
	expect(component).toBeTruthy();
  });
});
