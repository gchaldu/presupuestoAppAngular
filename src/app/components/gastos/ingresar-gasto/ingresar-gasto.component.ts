import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gasto } from 'src/app/models/Gasto';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {

  forms!: FormGroup;
  @Output() gasto = new EventEmitter<Gasto>();

  constructor(private formBuilder: FormBuilder, 
    private service: PresupuestoService){}

  ngOnInit(): void {
    this.forms = this.formBuilder.group({
      gasto: ['', [Validators.required]],
      cantidad: [0,[Validators.required]]
    })
  }

  agregarGasto()
  {
    if(this.forms.valid && this.forms.controls['cantidad'].value>0 )
    {
      let gasto = new Gasto(this.forms.controls['gasto'].value, this.forms.controls['cantidad'].value)
      this.service.setPresupuestoRestante(this.forms.controls['cantidad'].value);
      this.gasto.emit(gasto);
    }else{
      this.mensaje('Algún dato ingresado NO es correcto')
    }
  }

  mensaje(m:string){
    const div = document.getElementById('error');
      const mensaje = document.createElement('p');
      mensaje.innerText = m;
      mensaje.classList.add('bg', 'bg-danger');
      div?.appendChild(mensaje);

      setTimeout(() => {
        div?.removeChild(mensaje);
      }, 2000);
  }
}
