import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3'

import { ScreenService } from '../../shared/screen.service';

@Component({
  selector: 'tan-drinking-chart',
  templateUrl: './drinking-chart.component.html',
  styleUrls: ['./drinking-chart.component.less']
})
export class DrinkingChartComponent implements OnInit {
  public ctx: any;
  public chart: any;
  public labels: Array<any>;
  public yAxisValues: Array<number>;
  public yAxisPadding: any;

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
    if (!this.screenService.isLarge()) {
      this.yAxisValues = [0, 25, 50, 75, 100];
      this.yAxisPadding = { top: 50, bottom: 0 };
    } else {
      this.yAxisValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      this.yAxisPadding = { top: 120, bottom: 0 };
    }
    this.ctx = document.getElementById('drinkingChart');
    this.chart = c3.generate({
      bindto: this.ctx,
      tooltip: {
          show: false
      },
      grid: {
        x: {
          show: false
        },
        y: {
          show: true
        }
      },
      bar: {
        width: 50
      },
      legend: {
        show: false
      },
      data: {
        columns: [
          ['data1', 79, 5]
        ],
        types: {
          data1: 'bar',
        },
        labels: true
      },
      color: {
        pattern: [
          '#ed1c24', '#ed1c24'
        ]
      },
      axis: {
        rotated: true,
        x: {
          categories: ['Respondents whose \"parent don\'t mind them drinking alcohol as long as I dont drink too much\"',
            'Respondents whose \"parent don\'t like me drinking alcohol at all\"'],
          type: 'categorized'
        },
        y: {
          padding: this.yAxisPadding,
          tick: {
            values: this.yAxisValues,
            format: function (d) { return d + '%' }
          }
        }
      }
    });
}
}
