import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapViewCardComponent } from './map-view-card.component';

describe('MapViewCardComponent', () => {
  let component: MapViewCardComponent;
  let fixture: ComponentFixture<MapViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapViewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
