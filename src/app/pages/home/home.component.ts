import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../componentes/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
