import { Routes } from '@angular/router';

import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NormasOrganizacionalesComponent } from './pages/normas-organizacionales/normas-organizacionales.component';
import { NormasSeguridadComponent } from './pages/normas-seguridad/normas-seguridad.component';
import { ConsultoriaComponent } from './pages/consultoria/consultoria.component';
import { AuditoriasComponent } from './pages/auditorias/auditorias.component';
import { ControlCalidadComponent } from './pages/control-calidad/control-calidad.component';
import { CalidadCapacitacionComponent } from './pages/calidad-capacitacion/calidad-capacitacion.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    { path: 'navbar', component: NavbarComponent },
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'normas-organizacionales', component: NormasOrganizacionalesComponent },
    {path:'normas-seguridad', component:NormasSeguridadComponent},
    {path:'consultoria' , component :ConsultoriaComponent},
    {path:'auditorias',component:AuditoriasComponent},
    {path:'control-calidad', component: ControlCalidadComponent},
    {path:'calidad-capacitacion' , component:CalidadCapacitacionComponent},

];
