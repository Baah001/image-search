import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { AppSearchComponent } from './core/components/app-search/app-search.component';
import { ImageSearchBaseComponent } from './core/components/image-search-base/image-search-base.component';
import {StoreModule} from '@ngrx/store';
import {effects, metaReducers, reducers} from './core/state';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {ReactiveFormsModule} from '@angular/forms';
import { AppSearchContentComponent } from './core/components/app-search-content/app-search-content.component';
import { ImageSearchPaginationComponent } from './core/components/image-search-pagination/image-search-pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {PaginationPipe} from './shared/utils/pipes/pagination.pip';
import { SpinnerComponent } from './core/components/spinnner/spinner.component';

@NgModule({
  declarations: [
	AppComponent,
	AppSearchComponent,
	ImageSearchBaseComponent,
	AppSearchContentComponent,
	ImageSearchPaginationComponent,
	PaginationPipe,
	SpinnerComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	ReactiveFormsModule,
	NgxPaginationModule,
	StoreModule.forRoot(reducers, {
		metaReducers,
		runtimeChecks: {
		strictStateImmutability: true,
		strictActionImmutability: true,
		},
	}),
	StoreDevtoolsModule.instrument({ maxAge: 10 }),
	EffectsModule.forRoot(effects),
  ],
  providers: [PaginationPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
