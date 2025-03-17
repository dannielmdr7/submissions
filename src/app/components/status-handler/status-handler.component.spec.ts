import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusHandlerComponent } from './status-handler.component';

describe('StatusHandlerComponent', () => {
  let component: StatusHandlerComponent;
  let fixture: ComponentFixture<StatusHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
