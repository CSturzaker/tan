import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tan-feeling-chart',
  templateUrl: './feeling-chart.component.html',
  styleUrls: ['./feeling-chart.component.less']
})
export class FeelingChartComponent implements OnInit {
  public ctx: any;
  public chart: any;
  public labels: Array<any>;

  constructor() { }


  ngOnInit() {
  }
}
