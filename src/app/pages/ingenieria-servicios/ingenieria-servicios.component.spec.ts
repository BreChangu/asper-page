import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieriaServiciosComponent } from './ingenieria-servicios.component';

describe('IngenieriaServiciosComponent', () => {
  let component: IngenieriaServiciosComponent;
  let fixture: ComponentFixture<IngenieriaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngenieriaServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IngenieriaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
