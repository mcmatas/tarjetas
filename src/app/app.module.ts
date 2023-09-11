import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { SesionComponent } from './pages/sesion/sesion.component';
import { CurrentClassComponent } from './components/current-class/current-class.component';
import { TrimestersListComponent } from './components/trimesters-list/trimesters-list.component';
import { TrimesterItemComponent } from './components/trimester-item/trimester-item.component';
import { SesionDetailsComponent } from './components/sesion-details/sesion-details.component';
import { BeforeStartComponent } from './pages/exercices/before-start/before-start.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagesComponent,
    CurrentClassComponent,
    TrimestersListComponent,
    TrimesterItemComponent,
    SesionComponent,
    SesionDetailsComponent,
    BeforeStartComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
