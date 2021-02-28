import { Injectable } from '@angular/core';
import { Cliente } from '../scripts/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  clientes:Cliente[]=[];
  //Recupero la lista de clientes
  constructor() { 
    this.obtenerListaClientes();
  }
  //Cargo un nuevo cliento y lo guardo como JSON
  cargarCliente(nombre:string,apellido:string,direccion:string)
  {
    this.clientes.push(new Cliente(nombre,apellido,direccion));
    localStorage.setItem('clientes',JSON.stringify(this.clientes));
  }
  //Obtengo JSON con todos los clientes
  obtenerListaClientes():Cliente[]
  {
    this.clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    return this.clientes;
  }
}
