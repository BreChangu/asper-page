import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from './contacto.component';
import { ContactService } from '../../servicios/contact.service';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,  // Importa HttpClientTestingModule aquí
        ContactoComponent  // Importa ContactoComponent como standalone aquí
      ],
      providers: [
        ContactService  // Proporciona ContactService aquí
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega tus pruebas adicionales aquí
});
