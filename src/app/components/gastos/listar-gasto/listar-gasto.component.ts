import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent {

  @Input() listaMostrar: any;

  constructor(){
    this.verLista()
  }
  
  verLista(){
    console.log(this.listaMostrar);
  }
}
