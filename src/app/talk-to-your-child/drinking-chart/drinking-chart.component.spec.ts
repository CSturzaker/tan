import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkingChartComponent } from './drinking-chart.component';

describe('DrinkingChartComponent', () => {
  let component: DrinkingChartComponent;
  let fixture: ComponentFixture<DrinkingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
