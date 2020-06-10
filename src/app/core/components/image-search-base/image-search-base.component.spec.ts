import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchBaseComponent } from './image-search-base.component';

describe('ImageSearchBaseComponent', () => {
  let component: ImageSearchBaseComponent;
  let fixture: ComponentFixture<ImageSearchBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearchBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
