import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  isModalOpen = false;
  modalTitle = '';
  modalLinks: { label: string; url: string }[] = []; // Lista de enlaces dinámicos en el modal

  constructor(private router: Router) {}

  openModal(service: string): void {
    this.isModalOpen = true;

    // Configuración del modal según el servicio seleccionado
    switch (service) {
      case 'Seguridad e Higiene':
        this.modalTitle = 'Seguridad e Higiene';
        this.modalLinks = [
          { label: 'Normas Organizacionales', url: '/normas-organizacionales' },
          { label: 'Normas de Seguridad', url: '/normas-seguridad' },
          { label: 'Consultoría Especializada', url: '/seguridad-consultoria' }
        ];
        break;
      case 'Calidad':
        this.modalTitle = 'Calidad';
        this.modalLinks = [
          { label: 'Control de Calidad', url: '/calidad-control' },
          { label: 'Auditorías', url: '/calidad-auditorias' },
          { label: 'Capacitación', url: '/calidad-capacitacion' }
        ];
        break;
      case 'Ingeniería de Servicios':
        this.modalTitle = 'Ingeniería de Servicios';
        this.modalLinks = [
          { label: 'Diseño de Procesos', url: '/ingenieria-procesos' },
          { label: 'Optimización', url: '/ingenieria-optimizacion' },
          { label: 'Mantenimiento', url: '/ingenieria-mantenimiento' }
        ];
        break;
      case 'Servicios 4':
        this.modalTitle = 'Servicios 4';
        this.modalLinks = [
          { label: 'Servicio A', url: '/servicio-a' },
          { label: 'Servicio B', url: '/servicio-b' },
          { label: 'Servicio C', url: '/servicio-c' }
        ];
        break;
      default:
        this.modalTitle = 'Servicio';
        this.modalLinks = [];
    }
  }

  closeModal(): void {
    this.isModalOpen = false; // Cierra el modal
  }

  navigateToPage(url: string): void {
    this.router.navigateByUrl(url); // Redirige a la página correspondiente
    this.closeModal(); // Cierra el modal antes de navegar (opcional)
  }
}
