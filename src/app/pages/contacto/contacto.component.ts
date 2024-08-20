import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from '../../servicios/contact.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [NgIf, FormsModule,HttpClientModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  isFormVisible = false;

  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
    console.log('Formulario visible:', this.isFormVisible);

  };
 
  

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      // Lógica para enviar el formulario, por ejemplo, hacer una petición HTTP
      // Aquí podrías usar HttpClient de Angular para enviar los datos a tu servidor

      // Ocultar el formulario después de enviarlo
      this.isFormVisible = false;
      console.log('Formulario enviado:', contactForm.value);
    } else {
      console.log('Formulario no válido');
      
    }
  }
}
