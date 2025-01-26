import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { FooterComponent } from './componentes/footer/footer.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SliderComponent } from './componentes/slider/slider.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, ContactoComponent,]
})


export class AppComponent {
  title = 'Asper';
}
 


