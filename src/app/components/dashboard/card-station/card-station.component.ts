import { Component, OnInit } from '@angular/core';
import { IStation } from 'src/app/models/istation';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-card-station',
  templateUrl: './card-station.component.html',
  styleUrls: ['./card-station.component.css'],
})
export class CardStationComponent implements OnInit {
  stations: IStation[] = [];
  constructor(private station: StationService) {}
  ngOnInit(): void {
    this.getAllStation();
  }

  getAllStation() {
    this.station.getAllStations().subscribe((res) => {

      console.log ('dina', res)
      this.stations = res.station;
    });
  }
}
