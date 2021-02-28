import { HttpClient } from '@angular/common/http';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../scripts/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  clientes:Cliente[]=[];
  private _url:string = "http://localhost:8080/clientes";


  constructor(private http:HttpClient) {  }


  //Cargo un nuevo cliente y lo guardo en el backend
  async cargarCliente(nombre:string,apellido:string,direccion:string)
  {
     let cliente:Cliente = new Cliente(nombre,apellido,direccion);
     return await this.http.post<Cliente>(this._url,cliente).toPromise();
  }

  //Recupera los clientes desde el backEnd
  async recuperarClientes():Promise<Cliente[]>
  {     
    return this.http.get<Cliente[]>(this._url).toPromise();
  }

}
