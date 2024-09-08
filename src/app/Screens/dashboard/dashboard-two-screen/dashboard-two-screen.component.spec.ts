import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTwoScreenComponent } from './dashboard-two-screen.component';

describe('DashboardTwoScreenComponent', () => {
  let component: DashboardTwoScreenComponent;
  let fixture: ComponentFixture<DashboardTwoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardTwoScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTwoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
