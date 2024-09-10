import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThreeScreenComponent } from './header-three-screen.component';

describe('HeaderThreeScreenComponent', () => {
  let component: HeaderThreeScreenComponent;
  let fixture: ComponentFixture<HeaderThreeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderThreeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThreeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
