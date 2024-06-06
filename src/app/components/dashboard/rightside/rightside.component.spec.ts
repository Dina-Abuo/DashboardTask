import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideComponent } from './rightside.component';

describe('RightsideComponent', () => {
  let component: RightSideComponent;
  let fixture: ComponentFixture<RightSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideComponent],
    });
    fixture = TestBed.createComponent(RightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
