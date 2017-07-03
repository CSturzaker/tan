import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3'

@Component({
  selector: 'tan-drinking-chart',
  templateUrl: './drinking-chart.component.html',
  styleUrls: ['./drinking-chart.component.less']
})
export class DrinkingChartComponent implements OnInit {
  public ctx: any;
  public chart: any;
  public labels: Array<any>;

  constructor() { }

  ngOnInit() {
    this.ctx = document.getElementById('drinkingChart');
    this.chart = c3.generate({
      bindto: this.ctx,
      grid: {
        x: {
          show: false
        },
        y: {
          show: true
        }
      },
      data: {
        columns: [
          ['data1', 79, 5]
        ],
        types: {
          data1: 'bar',
        }
      },
      axis: {
        rotated: true,
        x: {
          categories: ['Respondents whose \"parent don\'t mind them drinking alcohol as long as I dont drink too much\"',
            'Respondents whose \"parent don\'t like me drinking alcohol at all\"'],
          type: 'categorized',
        },
        y: {
          max: 90
        }
      }

    });
  }
}
