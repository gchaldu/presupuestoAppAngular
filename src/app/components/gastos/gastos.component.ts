import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gasto } from 'src/app/models/Gasto';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit{


  @Input() lista!: Gasto[];

  constructor(private service: PresupuestoService, private router: Router)
  {}

  ngOnInit(): void {
      this.verificarPresupuesto(); 
  }

  verificarPresupuesto(){
    if (this.service.getPresupuesto()<=0)
    {
      //this.router.navigate(['/presupuesto'])
      console.log(this.lista);

    }

    console.log(this.lista);
  }
}
