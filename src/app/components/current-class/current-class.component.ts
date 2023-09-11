import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-class',
  templateUrl: './current-class.component.html',
  styles: [
  ]
})
export class CurrentClassComponent implements OnInit {

  public currentClass: string = "";

  ngOnInit(): void {
    // Llamada a la función para consulta a la BBDD
    const trimestre = "2º Trimestre";
    const sesion = 25;
    const titulo = "Ordinales, Fracciones y Decimales"

    this.currentClass = `${ trimestre } - Sesión ${ sesion }, ${ titulo }`;
  }

}
