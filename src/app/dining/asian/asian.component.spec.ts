import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsianComponent } from './asian.component';

describe('AsianComponent', () => {
  let component: AsianComponent;
  let fixture: ComponentFixture<AsianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
