import { Component, OnInit } from '@angular/core';
import Chart, { CoreScaleOptions } from 'chart.js/auto';

@Component({
  selector: 'app-graph-station',
  templateUrl: './graph-station.component.html',
  styleUrls: ['./graph-station.component.css'],
})
export class GraphStationComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('LineChart', {
      type: 'bar',
      data: {
        labels: [
          'Station Name Dummy 1',
          'Station Name Dummy 1',
          'Station Name Dummy 1',
          'Station Name Dummy 1',
          'Station Name Dummy 1',
        ],
        datasets: [
          {
            data: [250, 150, 200, 270, 175],
            backgroundColor: '#FF7F5C',
            borderColor: '#FF7F5C',
            borderWidth: 1,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
          },
        ],
      },
      options: {
        aspectRatio: 5,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (
                tickValue: string | number
              ): string | number | null {
                if (typeof tickValue === 'number') {
                  if (tickValue === 0) return tickValue;
                  if (tickValue === 100) return tickValue;
                  if (tickValue > 100 && (tickValue - 100) % 50 === 0)
                    return tickValue;
                }
                return null;
              },
            },
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
