import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsViewComponent } from './actions-view.component';

describe('ActionsViewComponent', () => {
  let component: ActionsViewComponent;
  let fixture: ComponentFixture<ActionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
