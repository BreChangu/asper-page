import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit, OnDestroy {
  slides = [
    { imageUrl: 'assets/imagenes/seguridad.jpg', caption: 'Seguridad e Higiene' },
    { imageUrl: 'assets/imagenes/calidad.jpg', caption: 'Calidad' },
    { imageUrl: 'assets/imagenes/ingenieria.png', caption: 'Ingeniería de Servicios' },
    { imageUrl: 'assets/imagenes/servicios.jpeg', caption: 'Servicios 4' }
  ];

  currentSlide = 0;
  autoSlideInterval: any;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia de diapositiva cada 3 segundos
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.slides.length - 1;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide < this.slides.length - 1) ? this.currentSlide + 1 : 0;
  }

  navigateToService(): void {
    this.router.navigateByUrl('/servicios');
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval); // Limpia el intervalo cuando el componente se destruya
    }
  }
}
