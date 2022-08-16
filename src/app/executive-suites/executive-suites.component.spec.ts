import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveSuitesComponent } from './executive-suites.component';

describe('ExecutiveSuitesComponent', () => {
  let component: ExecutiveSuitesComponent;
  let fixture: ComponentFixture<ExecutiveSuitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiveSuitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveSuitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
