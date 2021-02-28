import { Injectable } from '@angular/core';
import { Cliente } from '../scripts/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  cargarCliente(nombre:string,apellido:string,direccion:string)
  {

  }

  obtenerListaClientes():Cliente[]
  {
      return null;
  }
}
