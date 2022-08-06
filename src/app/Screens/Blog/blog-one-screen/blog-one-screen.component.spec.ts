import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOneScreenComponent } from './blog-one-screen.component';

describe('BlogOneScreenComponent', () => {
  let component: BlogOneScreenComponent;
  let fixture: ComponentFixture<BlogOneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOneScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
