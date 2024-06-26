import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  constructor(private http: HttpClient) {}

  getAllStations(): Observable<any> {
    return this.http.get<any>('assets/db.json');
  }
  getAllStationStatistics(): Observable<any> {
    return this.http.get<any>('assets/db.json');
  }


}
