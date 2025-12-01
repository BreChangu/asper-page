import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../componentes/slider/slider.component';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Home');
    this.meta.addTag({name: 'description', content: 'Home'});
    this.meta.addTag({name: 'author', content: 'Home'});
  }

  ngOnInit() {
    this.title.setTitle('Asper Consultoría - Soluciones Innovadoras');
    this.meta.addTags([
      { name: 'description', content: 'Asper es una firma de consultoría especializada en brindar orientación estratégica y apoyo a empresas. Transforme su empresa con nuestras estrategias personalizadas y efectivas.' },
      { name: 'keywords', content: 'consultoría, negocios, estrategias, empresa' }
    ]);
  }

}
