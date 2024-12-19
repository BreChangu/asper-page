import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasSeguridadComponent } from './normas-seguridad.component';

describe('NormasSeguridadComponent', () => {
  let component: NormasSeguridadComponent;
  let fixture: ComponentFixture<NormasSeguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormasSeguridadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormasSeguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
