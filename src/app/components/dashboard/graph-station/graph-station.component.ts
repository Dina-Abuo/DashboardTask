import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

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
      type: 'line',
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
            pointRadius: 0,
            borderJoinStyle: 'round',
          }
        ],
      },
      options: {
        
      },
    });
  }
}
