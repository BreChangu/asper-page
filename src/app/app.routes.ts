import { Routes } from '@angular/router';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NormasOrganizacionalesComponent } from './pages/normas-organizacionales/normas-organizacionales.component';

export const routes: Routes = [
    { path: 'navbar', component: NavbarComponent },
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'normas-organizacionales', component: NormasOrganizacionalesComponent } 
];
