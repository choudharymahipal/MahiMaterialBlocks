import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTwoScreenComponent } from './blog-two-screen.component';

describe('BlogTwoScreenComponent', () => {
  let component: BlogTwoScreenComponent;
  let fixture: ComponentFixture<BlogTwoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTwoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTwoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
