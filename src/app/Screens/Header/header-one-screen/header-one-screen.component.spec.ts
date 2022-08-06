import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOneScreenComponent } from './header-one-screen.component';

describe('HeaderOneScreenComponent', () => {
  let component: HeaderOneScreenComponent;
  let fixture: ComponentFixture<HeaderOneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOneScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderOneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
