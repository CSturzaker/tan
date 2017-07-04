import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3'

import { ScreenService } from '../../shared/screen.service';

@Component({
  selector: 'tan-feeling-chart',
  templateUrl: './feeling-chart.component.html',
  styleUrls: ['./feeling-chart.component.less']
})
export class FeelingChartComponent implements OnInit {
  public ctx: any;
  public chart: any;
  public labels: Array<any>;
  public yAxisValues: Array<number>;
  public yAxisPadding: any;

  constructor(private screenService: ScreenService) { }


  ngOnInit() {
    if (!this.screenService.isLarge()) {
      this.yAxisValues = [0, 25, 50, 75];
      this.yAxisPadding = { top: 50, bottom: 0 };
    } else {
      this.yAxisValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      this.yAxisPadding = { top: 60, bottom: 0 };
    }
    this.ctx = document.getElementById('feelingChart');
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
          ['data1', 10, 5, 67, 18]
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
          categories: ['They don\'t know I drink', 'They let me drink as much as I like',
                      'They don\'t mind as long as I don\'t drink too much', 'They don\'t like me drinking alcohol at all'],
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
