import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalidadCapacitacionComponent } from './calidad-capacitacion.component';

describe('CalidadCapacitacionComponent', () => {
  let component: CalidadCapacitacionComponent;
  let fixture: ComponentFixture<CalidadCapacitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalidadCapacitacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalidadCapacitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
