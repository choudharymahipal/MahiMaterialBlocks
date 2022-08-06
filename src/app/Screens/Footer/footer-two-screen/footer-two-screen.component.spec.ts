import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTwoScreenComponent } from './footer-two-screen.component';

describe('FooterTwoScreenComponent', () => {
  let component: FooterTwoScreenComponent;
  let fixture: ComponentFixture<FooterTwoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTwoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTwoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
