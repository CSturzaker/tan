import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

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
    this.labels = [
      // tslint:disable-next-line:quotemark
      ["Respondents whose", "parent \"don\'t mind them ", "drinking alcohol as long as", "I don\'t drink too much\""],
      // tslint:disable-next-line:quotemark
      ["Respondents whose", "parent don't like me", "drinking alcohol at all\""]
    ]
    this.ctx = document.getElementById('drinkingChart');
    this.chart = new Chart(this.ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'How often do you drink alcohol?',
          data: [79, 5],
          backgroundColor: [
            'rgba(237, 28, 36, 0.6)',
            'rgba(237, 28, 36, 0.6)'
          ],
          borderColor: [
            'rgba(237, 28, 36, 1)',
            'rgba(237, 28, 36, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        title: {
          fontColor: '#fff',
          text: 'How often do you drink alcohol?'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawBorder: false,
              color: '#ed1c24',
              display: true,
              zeroLineColor: '#ed1c24'
            },
            ticks: {
              min: 0,
              max: 100,
              fontColor: '#fff'
            },

          }],
          yAxes: [{
            type: 'category',
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontColor: '#fff'
            }
          }]
        }
      }
    });
  }
}
