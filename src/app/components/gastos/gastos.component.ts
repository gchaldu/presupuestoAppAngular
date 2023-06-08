import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gasto } from 'src/app/models/Gasto';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit{

  gasto!: Gasto;
  listaGastos: Gasto[]=[];
  presupuesto!: number;
  restante!:number;

  constructor(private service: PresupuestoService, 
    private router: Router){}

  ngOnInit(): void {
      this.verificarPresupuesto(); 
  }

  verificarPresupuesto(){
    if (this.service.getPresupuesto()<=0)
    {
      this.router.navigate(['/presupuesto'])
    }
    this.presupuesto = this.service.getPresupuesto();
  }

  addGasto(gasto: Gasto){
    this.gasto = gasto;
    this.listaGastos = [this.gasto, ...this.listaGastos];
    this.restante = this.service.getPresupuestoRestante();
  }
}
