import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBeverageComponent } from './food-beverage.component';

describe('FoodBeverageComponent', () => {
  let component: FoodBeverageComponent;
  let fixture: ComponentFixture<FoodBeverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodBeverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodBeverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
