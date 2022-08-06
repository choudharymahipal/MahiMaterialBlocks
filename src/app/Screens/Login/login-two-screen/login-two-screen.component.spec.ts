import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTwoScreenComponent } from './login-two-screen.component';

describe('LoginTwoScreenComponent', () => {
  let component: LoginTwoScreenComponent;
  let fixture: ComponentFixture<LoginTwoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTwoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTwoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
