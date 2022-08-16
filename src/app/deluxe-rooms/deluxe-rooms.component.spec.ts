import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeluxeRoomsComponent } from './deluxe-rooms.component';

describe('DeluxeRoomsComponent', () => {
  let component: DeluxeRoomsComponent;
  let fixture: ComponentFixture<DeluxeRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeluxeRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeluxeRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
