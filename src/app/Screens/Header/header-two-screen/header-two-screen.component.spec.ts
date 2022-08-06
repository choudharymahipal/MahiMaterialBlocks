import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTwoScreenComponent } from './header-two-screen.component';

describe('HeaderTwoScreenComponent', () => {
  let component: HeaderTwoScreenComponent;
  let fixture: ComponentFixture<HeaderTwoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTwoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTwoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
