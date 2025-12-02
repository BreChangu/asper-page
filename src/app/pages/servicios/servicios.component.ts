import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {  HostListener } from '@angular/core';

// Definimos la estructura de un Servicio
interface ServiceItem {
  title: string;
  subtitle: string;
  image: string;
  links: { label: string; url: string }[];
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  
  isModalOpen = false;
  selectedService: ServiceItem | null = null;

  // DATA: Aquí configuras todo tu contenido
  services: ServiceItem[] = [
    {
      title: 'Seguridad e Higiene',
      subtitle: 'Protección Normativa',
      image: 'assets/imagenes/seguridad.png',
      links: [
        { label: 'Normas Organizacionales', url: '/normas-organizacionales' },
        { label: 'Normas de Seguridad', url: '/normas-seguridad' },
        { label: 'Consultoría Especializada', url: '/consultoria' }
      ]
    },
    {
      title: 'Calidad',
      subtitle: 'Excelencia Operativa',
      image: 'assets/imagenes/calidad.jpg',
      links: [
        { label: 'Control de Calidad', url: '/control-calidad' },
        { label: 'Auditorías', url: '/auditorias' },
        { label: 'Sistemas de Gestión', url: '/calidad-capacitacion' }
      ]
    },
    {
      title: 'Ingeniería de Servicios',
      subtitle: 'Optimización de Procesos',
      image: 'assets/imagenes/ingenieria.png',
      links: [
        { label: 'Diseño de Procesos', url: '/ingenieria-procesos' },
        { label: 'Optimización', url: '/ingenieria-optimizacion' },
        { label: 'Mantenimiento', url: '/ingenieria-mantenimiento' }
      ]
    },
    {
      title: 'Capacitación', // Cambié "Servicios 4" por algo más real
      subtitle: 'Desarrollo de Talento',
      image: 'assets/imagenes/servicios.jpeg',
      links: [
        { label: 'Cursos Técnicos', url: '/servicio-a' },
        { label: 'Talleres Prácticos', url: '/servicio-b' },
        { label: 'Certificaciones', url: '/servicio-c' }
      ]
    }
  ];

  constructor(private router: Router) {}

@HostListener('document:keydown.escape')
  onKeydownHandler() {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }

  openModal(service: ServiceItem): void {
    this.selectedService = service;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Bloquear scroll
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto'; // Reactivar scroll
  }

  navigateToPage(url: string): void {
    this.closeModal();
    this.router.navigateByUrl(url);
  }



  
}