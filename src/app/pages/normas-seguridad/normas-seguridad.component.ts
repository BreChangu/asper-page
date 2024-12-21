import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-normas-seguridad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './normas-seguridad.component.html',
  styleUrl: './normas-seguridad.component.css'
})
export class NormasSeguridadComponent {
  normas = [
    { titulo: 'NOM-017-STPS-2008', url: 'https://es.wikipedia.org/wiki/NOM-017-STPS-2008' },  // Enlace externo
    { titulo: 'NOM-018-STPS-2015', url: 'https://es.wikipedia.org/wiki/NOM-018-STPS-2015' },  // Enlace externo
    { titulo: 'NOM-019-STPS-2011', url: 'https://platiica.economia.gob.mx/normalizacion/nom-019-stps-2011/' },
    { titulo: 'NOM-026-STPS-2008', url: 'https://es.wikipedia.org/wiki/NOM-026-STPS-2008' },
    { titulo: 'NOM-030-STPS-2009', url: 'https://natlex.ilo.org/dyn/natlex2/r/natlex/fe/details?p3_isn=83186' }
  ];
https: any;
}
'.0'
  
