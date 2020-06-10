import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchContentComponent } from './app-search-content.component';

describe('AppSearchContentComponent', () => {
  let component: AppSearchContentComponent;
  let fixture: ComponentFixture<AppSearchContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSearchContentComponent ]
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
