import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeovedaComponent } from './neoveda.component';

describe('NeovedaComponent', () => {
  let component: NeovedaComponent;
  let fixture: ComponentFixture<NeovedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeovedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeovedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
