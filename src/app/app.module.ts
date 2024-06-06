import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightSideComponent } from './components/dashboard/rightside/rightside.component';
import { CardStationComponent } from './components/dashboard/card-station/card-station.component';
import { HttpClientModule } from '@angular/common/http';
import { StationStatisticsComponent } from './components/dashboard/station-statistics/station-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    RightSideComponent,
    CardStationComponent,
    StationStatisticsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
