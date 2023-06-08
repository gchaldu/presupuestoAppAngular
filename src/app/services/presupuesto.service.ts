import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  presupuesto: number;
  presupuestoRestante:number;

  constructor() { 
    this.presupuesto=1000;
    this.presupuestoRestante=1000;
  }

  setPresupuesto(presupuesto: number)
  {
    this.presupuesto = presupuesto;
    this.presupuestoRestante = presupuesto;
  }
  setPresupuestoRestante(gasto: number):boolean
  {
    if(this.presupuestoRestante>gasto){
      this.presupuestoRestante = this.presupuestoRestante - gasto;
      console.log(this.presupuestoRestante)
      return true;
    }
    return false;
  }

  getPresupuesto():number
  {
    return this.presupuesto
  }

  getPresupuestoRestante():number
  {
    return this.presupuestoRestante
  }
}
