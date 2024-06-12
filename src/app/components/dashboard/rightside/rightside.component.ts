import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-rightside',
  templateUrl: './rightside.component.html',
  styleUrls: ['./rightside.component.css'],
})
export class RightSideComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'radar',
      data: {
        labels: [
          '24:00',
          '02:00',
          '04:00',
          '06:00',
          '08:00',
          '10:00',
          '12:00',
          '14:00',
          '16:00',
          '18:00',
          '20:00',
          '22:00',
        ],
        datasets: [
          {
            data: [15, 25, 20, 25, 30, 35, 15, 20, 25, 20, 15, 30],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            pointRadius: 0,
            borderJoinStyle: 'round',
          },
          {
            data: [25, 20, 30, 20, 25, 40, 20, 15, 30, 25, 20, 35],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            pointRadius: 0,
            borderJoinStyle: 'round',
          },
        ],
      },
      options: {
        aspectRatio: 1.3,
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 50,
            pointLabels: {
              font: {
                size: 10,
              },
              color: '#8D8F96',
            },
            ticks: {
              display: false,
              stepSize: 10,
            },
          },
        },
        elements: {
          line: {
            tension: 0.4,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
