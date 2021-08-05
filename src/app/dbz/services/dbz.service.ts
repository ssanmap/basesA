import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{


 private  _personajes: Personaje[] = [
    {nombre:'vegeta', poder:121212},
    {nombre:'goku', poder:22121},
    {nombre:'krilin', poder:2},
    {nombre:'cell', poder:33333333},
    {nombre:'v', poder:12144444444212}
  ];


  get personajes(): Personaje[] {
    return [...this._personajes];
}

constructor() {}

agregarPersonaje( personaje: Personaje ) {
    this._personajes.push( personaje );
}
}
