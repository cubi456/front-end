import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../scripts/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  clientes:Cliente[]=[];
  private _url:string = "http://localhost:8080/clientes";


  constructor(private http:HttpClient) {  }


  /**
   * Este metodo crea un nuevo cliente y lo almacena en el servidor.
   * Retorna una promesa.
   */
  async cargarCliente(nombre:string,apellido:string,direccion:string):Promise<Cliente>
  {
     let cliente:Cliente = new Cliente(nombre,apellido,direccion);
     return await this.http.post<Cliente>(this._url,cliente).toPromise();
  }

  /**
   * Este metodo recupera la listas de clientes del servidor.
   * Retorna una promesa.
   */
  async recuperarClientes():Promise<Cliente[]>
  {     
    return await this.http.get<Cliente[]>(this._url).toPromise();
  }

}
