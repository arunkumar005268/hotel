import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrestComponent } from './crest.component';

describe('CrestComponent', () => {
  let component: CrestComponent;
  let fixture: ComponentFixture<CrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
