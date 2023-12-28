export class Tarjeta {
    public nombreTitular: string;
    public numeroTarjeta: string;
    public mesCaducidad: string;
    public yearCaducidad: string;
    public cvv: string;
    public emisor: string;
    public concepto: string;
    public cantidad: number;
  
    constructor() {
      this.nombreTitular = '';
      this.numeroTarjeta = '';
      this.mesCaducidad = '';
      this.yearCaducidad = '';
      this.cvv = '';
      this.emisor = 'LucaTicket';
      this.concepto = 'Compra entrada';
      this.cantidad = 0;
    }
  
    public getNombreTitular(): string {
      return this.nombreTitular;
    }
    public setNombreTitular(value: string) {
      this.nombreTitular = value;
    }
  
    public getNumeroTarjeta(): string {
      return this.numeroTarjeta;
    }
    public setNumeroTarjeta(value: string) {
      this.numeroTarjeta = value;
    }
  
    public getMesCaducidad(): string {
      return this.mesCaducidad;
    }
    public setMesCaducidad(value: string) {
      this.mesCaducidad = value;
    }
  
    public getYearCaducidad(): string {
      return this.yearCaducidad;
    }
    public setYearCaducidad(value: string) {
      this.yearCaducidad = value;
    }
  
    public getCvv(): string {
      return this.cvv;
    }
    public setCvv(value: string) {
      this.cvv = value;
    }
  
    public getEmisor(): string {
      return this.emisor;
    }
    public setEmisor(value: string) {
      this.emisor = value;
    }
  
    public getConcepto(): string {
      return this.concepto;
    }
    public setConcepto(value: string) {
      this.concepto = value;
    }
  
    public getCantidad(): number {
      return this.cantidad;
    }
    public setCantidad(value: number) {
      this.cantidad = value;
    }
  }
  