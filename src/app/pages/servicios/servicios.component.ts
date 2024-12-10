import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  isModalOpen = false;
  modalText = '';
  openModal(serviceName: string) {
    this.isModalOpen = true;

    switch (serviceName) {
      case 'Seguridad e Higiene':
        this.modalTitle = 'Seguridad e Higiene';
        this.modalLinks = [
          { label: 'Plan de Prevención', url: '/seguridad-prevencion' },
          { label: 'Normas Oficiales', url: '/seguridad-normas' },
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

  closeModal() {
    this.isModalOpen = false;
  }

  navigateToPage(url: string) {
    this.closeModal();
    this.router.navigateByUrl(url);
  }
}
