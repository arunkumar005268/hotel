import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetropolitanSuitesComponent } from './metropolitan-suites.component';

describe('MetropolitanSuitesComponent', () => {
  let component: MetropolitanSuitesComponent;
  let fixture: ComponentFixture<MetropolitanSuitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetropolitanSuitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetropolitanSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
