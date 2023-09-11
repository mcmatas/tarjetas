import { Sesion } from "./sesion.model";


export class Trimestre {

    constructor(
        public numero: number,
        public sesiones: Sesion[]
    ){}

}