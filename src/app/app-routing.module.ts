import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphStationComponent } from './components/dashboard/graph-station/graph-station.component';
import { CardStationComponent } from './components/dashboard/card-station/card-station.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/graph-station', pathMatch: 'full' },
  { path: 'dashboard/graph-station', component: GraphStationComponent },
  { path: 'dashboard/list-station', component: CardStationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
