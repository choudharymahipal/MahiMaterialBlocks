import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneViewComponent } from './one-view.component';

describe('OneViewComponent', () => {
  let component: OneViewComponent;
  let fixture: ComponentFixture<OneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
