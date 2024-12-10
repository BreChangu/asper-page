import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormasOrganizacionalesComponent } from './normas-organizacionales.component';

describe('NormasOrganizacionalesComponent', () => {
  let component: NormasOrganizacionalesComponent;
  let fixture: ComponentFixture<NormasOrganizacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NormasOrganizacionalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NormasOrganizacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
