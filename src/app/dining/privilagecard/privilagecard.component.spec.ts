import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilagecardComponent } from './privilagecard.component';

describe('PrivilagecardComponent', () => {
  let component: PrivilagecardComponent;
  let fixture: ComponentFixture<PrivilagecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilagecardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivilagecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
