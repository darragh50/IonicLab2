import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeatingPage } from './seating.page';

describe('SeatingPage', () => {
  let component: SeatingPage;
  let fixture: ComponentFixture<SeatingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
