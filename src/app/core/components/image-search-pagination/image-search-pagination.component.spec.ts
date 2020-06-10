import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchPaginationComponent } from './image-search-pagination.component';

describe('ImageSearchPaginationComponent', () => {
  let component: ImageSearchPaginationComponent;
  let fixture: ComponentFixture<ImageSearchPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
