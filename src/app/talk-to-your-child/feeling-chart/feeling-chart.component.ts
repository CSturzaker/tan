import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

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
    this.labels = [
      // tslint:disable-next-line:quotemark
      ["They don\'t know I drink"],
      ['They let me drink as much', 'as I like'],
      // tslint:disable-next-line:quotemark
      ["They don\'t mind as", "long as I don\'t drink too much"],
      // tslint:disable-next-line:quotemark
      ["They don\'t like me drinking", "alcohol at all"]
    ]
    this.ctx = document.getElementById('feelingChart');
    this.chart = new Chart(this.ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'How do your parents feel about you drinking alcohol?',
          data: [10, 5, 67, 18],
          backgroundColor: [
            'rgba(237, 28, 36, 0.6)',
            'rgba(237, 28, 36, 0.6)',
            'rgba(237, 28, 36, 0.6)',
            'rgba(237, 28, 36, 0.6)'
          ],
          borderColor: [
            'rgba(237, 28, 36, 1)',
            'rgba(237, 28, 36, 1)',
            'rgba(237, 28, 36, 1)',
            'rgba(237, 28, 36, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        title: {
          fontColor: '#fff',
          text: 'How do your parents feel about you drinking alcohol?'
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
