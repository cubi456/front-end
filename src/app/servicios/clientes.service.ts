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
  cargarCliente(nombre:string,apellido:string,direccion:string):Observable<Cliente>
  {
     let cliente:Cliente = new Cliente(nombre,apellido,direccion);
     return this.http.post<Cliente>(this._url,cliente);
  }

  //Recupera los clientes desde el backEnd
  recuperarClientes():Observable<Cliente[]>
  {
    return this.http.get<Cliente[]>(this._url);
  }

}
