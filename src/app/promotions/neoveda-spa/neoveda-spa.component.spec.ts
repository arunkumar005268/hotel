import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeovedaSpaComponent } from './neoveda-spa.component';

describe('NeovedaSpaComponent', () => {
  let component: NeovedaSpaComponent;
  let fixture: ComponentFixture<NeovedaSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeovedaSpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeovedaSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
