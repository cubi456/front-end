import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Cliente } from '../../scripts/cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styles: [
  ]
})
export class ListaClientesComponent implements OnInit {

  clientes:Cliente[] = [];

  constructor(public _clientesService:ClientesService) { }

  ngOnInit(): void {
    this.actualizarClientes();
  }
  
  /**
   * Solicita la lista de clientes al servicio cliente
   * y los almacena dentro del array clientes.
   */
  async actualizarClientes()
  {
      this.clientes = await this._clientesService.recuperarClientes();
  }

}
