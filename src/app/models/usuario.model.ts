import { Trimestre } from "./trimestre.model";


export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public id: number,
        public trimestres: Trimestre[]
    ){}

}