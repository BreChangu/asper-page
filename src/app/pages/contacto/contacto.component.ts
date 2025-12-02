import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../servicios/contact.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Elimina HttpClientModule de aquí
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  isFormVisible = false;

  constructor(private contactService: ContactService) {}

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    console.log('Formulario visible:', this.isFormVisible);
  }
  

  openWhatsApp() {
    const phoneNumber = '525512345678'; // Reemplaza con tu número real (código país + número)
    const message = 'Hola, me interesa cotizar un servicio con Asper.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      this.contactService.sendContactEmail(contactForm.value).subscribe({
        next: (response) => {
          console.log('Correo enviado', response);
          alert('Correo enviado correctamente');
          this.isFormVisible = false;
          contactForm.reset();
        },
        error: (error) => {
          console.error('Error al enviar el correo', error);
          alert('Hubo un error al enviar el correo');
        }
      });
    } else {
      console.log('Formulario no válido');
      alert('Por favor, completa todos los campos.');
    }
  }}
