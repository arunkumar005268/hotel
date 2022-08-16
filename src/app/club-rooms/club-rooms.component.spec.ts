import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubRoomsComponent } from './club-rooms.component';

describe('ClubRoomsComponent', () => {
  let component: ClubRoomsComponent;
  let fixture: ComponentFixture<ClubRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
