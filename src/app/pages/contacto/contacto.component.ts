import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../servicios/contact.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NgIf, FormsModule],  // Elimina HttpClientModule de aquí
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
