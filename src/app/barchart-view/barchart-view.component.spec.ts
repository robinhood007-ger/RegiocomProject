import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartViewComponent } from './barchart-view.component';

describe('BarchartViewComponent', () => {
  let component: BarchartViewComponent;
  let fixture: ComponentFixture<BarchartViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarchartViewComponent]
    });
    fixture = TestBed.createComponent(BarchartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
