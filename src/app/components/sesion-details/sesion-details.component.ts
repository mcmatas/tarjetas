import { Component, Input, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';
import { TrimestreService } from 'src/app/services/trimestre.service';

@Component({
  selector: 'app-sesion-details',
  templateUrl: './sesion-details.component.html',
  styles: [
  ]
})
export class SesionDetailsComponent implements OnInit{

  @Input() trimestre: any;
  public sesiones: any;
  public sesionesCompletadas: number = 0;
  public currentSesion: number = 1;

  constructor( private trimestreService: TrimestreService) {}

  ngOnInit(): void {
    this.sesiones = this.trimestre.sesiones;
    this.sesionesCompletadas = this.trimestreService.getSesionesCompletadas( this.trimestre );
  }

  getCurrentSesion(): number {
    // Comprobamos que no se hayan completado todas las sesiones
    return (this.sesiones.find( (s: Sesion) => s.completado === false)) ? this.sesiones.find( (s: Sesion) => s.completado === false).numero : 0;
  }
}
