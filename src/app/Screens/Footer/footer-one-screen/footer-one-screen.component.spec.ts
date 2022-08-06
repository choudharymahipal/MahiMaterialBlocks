import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOneScreenComponent } from './footer-one-screen.component';

describe('FooterOneScreenComponent', () => {
  let component: FooterOneScreenComponent;
  let fixture: ComponentFixture<FooterOneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterOneScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
