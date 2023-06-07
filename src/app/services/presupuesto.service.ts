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
    this.presupuesto = this.presupuesto + presupuesto;
  }
  setPresupuestoRestante(gasto: number)
  {
    if(this.presupuestoRestante>gasto){
      this.presupuestoRestante = this.presupuestoRestante-gasto;
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
