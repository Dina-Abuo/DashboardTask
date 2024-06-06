import { Component, OnInit } from '@angular/core';
import { IStationStatistics } from 'src/app/models/istation';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-statistics',
  templateUrl: './station-statistics.component.html',
  styleUrls: ['./station-statistics.component.css'],
})
export class StationStatisticsComponent implements OnInit {
  stationStatistics: IStationStatistics[] = [];
  constructor(private station: StationService) {}
  ngOnInit(): void {
    this.getAllStation();
  }

  getAllStation() {
    this.station.getAllStationStatistics().subscribe((res) => {
      this.stationStatistics = res.stationStatistics;
    });
  }
}
