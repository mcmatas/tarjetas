import { Injectable } from '@angular/core';

import { Trimestre } from '../models/trimestre.model';
import { Sesion } from '../models/sesion.model';

import data from '../data/usuarios.json';

@Injectable({
  providedIn: 'root'
})
export class TrimestreService {

  public sesionesCompletadas: number = 0;

  constructor() { }

  getTrimestre( number: number ): any {
    // Aquí haríamos la petición a la API con los trimestres. En este caso importamos un json
    return data.trimestres.find( obj => obj.numero === number);
  }

  getAllTrimestre(): Trimestre[] {
    return data.trimestres;
  }

  getSesionesCompletadas ( trimestre: Trimestre ): number {
    return trimestre.sesiones.filter( (s: Sesion) => s.completado === true).length;
  }

}
