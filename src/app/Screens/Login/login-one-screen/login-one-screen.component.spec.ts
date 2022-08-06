import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOneScreenComponent } from './login-one-screen.component';

describe('LoginOneScreenComponent', () => {
  let component: LoginOneScreenComponent;
  let fixture: ComponentFixture<LoginOneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginOneScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
