import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {

  cantidad: number=0;

  constructor(private servive: PresupuestoService, private router: Router){
    
  }

  agregar(){
    if(this.cantidad>0){
      this.servive.setPresupuesto(this.cantidad);
      this.router.navigate(['/gastos'])
    }else{
      this.mensaje('El presupuesto tiene que ser mayor a cero...');
    }
  }

  mensaje(mensaje: string){
    const div = document.getElementById('error')
    const mensajeError = document.createElement('p');
    mensajeError.textContent=mensaje;
    mensajeError.classList.add('bg', 'bg-danger', 'text-error');
    div?.appendChild(mensajeError);

    setTimeout(() => {
      div?.removeChild(mensajeError);
    }, 3000);
  }
}
 