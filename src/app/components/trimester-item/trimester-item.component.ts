import { Component, Input, OnInit } from '@angular/core';
import { Sesion } from 'src/app/models/sesion.model';
import { TrimestreService } from 'src/app/services/trimestre.service';


@Component({
  selector: 'app-trimester-item',
  templateUrl: './trimester-item.component.html',
  styles: [
  ]
})
export class TrimesterItemComponent implements OnInit {

  @Input() trimestre: any;
  public sesionesCompletadas: number = 0;
  public isCompleted: boolean = false;

  constructor( private trimestreService: TrimestreService) {}

  ngOnInit(): void {
    
    this.sesionesCompletadas = this.trimestreService.getSesionesCompletadas( this.trimestre );

  }

  getFillCircle(): string {
    const radio = 40; // Cambia esto según el radio 
    const maxSesiones = this.trimestre.sesiones.length; 

    // Calcula el ángulo de la porción de queso en función de las sesiones completadas
    const angulo = (this.sesionesCompletadas / maxSesiones) * 360;

    // Crea el atributo 'd' del elemento <path>
    let x1;
    if( this.sesionesCompletadas === maxSesiones) {
      x1 = 49.9;
      this.isCompleted = true;
    }else {
      x1 = 50 + radio * Math.cos((angulo - 90) * (Math.PI / 180));
    }
    const y1 = 50 + radio * Math.sin((angulo - 90) * (Math.PI / 180));
    const grande = angulo > 180 ? 1 : 0;
    const direccion = 1; // 1 para sentido de las agujas del reloj
    const d = `M50,50 L50,10 A${radio},${radio} 0 ${grande},${direccion} ${x1},${y1} Z`;

    return d;
  }

}
