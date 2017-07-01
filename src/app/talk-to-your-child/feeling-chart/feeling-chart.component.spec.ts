import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingChartComponent } from './feeling-chart.component';

describe('FeelingChartComponent', () => {
  let component: FeelingChartComponent;
  let fixture: ComponentFixture<FeelingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
