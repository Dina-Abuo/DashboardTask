import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphStationComponent } from './graph-station.component';

describe('GraphStationComponent', () => {
  let component: GraphStationComponent;
  let fixture: ComponentFixture<GraphStationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphStationComponent]
    });
    fixture = TestBed.createComponent(GraphStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
