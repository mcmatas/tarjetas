import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BeforeStartComponent } from './pages/exercices/before-start/before-start.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { SesionComponent } from './pages/sesion/sesion.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'start', component: BeforeStartComponent, data: { titulo: 'Empezar' } },
    ]
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
      { path: 'sesiones/:trimestre', component: SesionComponent, data: { titulo: 'Sesiones' } },
      { path: '**', component: HomeComponent },
    ]
  },
  
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
