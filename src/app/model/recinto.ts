export class Recinto {
    nombre: string;
    localidad: string;

    constructor(nombre?: string) {

        this.nombre = nombre || '';
        this.localidad = '';
    }

      public getNombre(): string{
        return this.nombre;
      }
    
      public setNombre(nombre: string): void{
        this.nombre=nombre;
      }
}
