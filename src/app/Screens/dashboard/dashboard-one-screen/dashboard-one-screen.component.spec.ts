import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOneScreenComponent } from './dashboard-one-screen.component';

describe('DashboardOneScreenComponent', () => {
  let component: DashboardOneScreenComponent;
  let fixture: ComponentFixture<DashboardOneScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOneScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOneScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
