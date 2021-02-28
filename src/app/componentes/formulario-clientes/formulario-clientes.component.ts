import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styles: [
  ]
})
export class FormularioClientesComponent implements OnInit {

  //Genero la logica del formulario con los validadores correspondientes
  formulario:FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('',[Validators.required,Validators.minLength(3)]),
    direccion: new FormControl('',[Validators.required,Validators.minLength(3)])
  });
  //Inyecto en el componente el servicio cliente y el ruteador.
  constructor(public router:Router, public _clientesService:ClientesService) { }

  ngOnInit(): void {
  }

  /** Este metodo toma los datos correspondientes del formulario
   *  y solicita al servicio cliente que cree un nuevo cliente. 
   *  Una vez completada la accion rutea a la tabla de clientes
   *  o muestra un cartel de error. */
  nuevoCliente()
  {
      if(this.formulario.valid)
       {
         let nombre:string,apellido:string,direccion:string;
         nombre = this.formulario.value.nombre
         apellido = this.formulario.value.apellido
         direccion = this.formulario.value.direccion
         //Recivo la promesa del metodo cargar cliente y cuando se resuelve navego a la siguiente pagina
         this._clientesService.cargarCliente(nombre,apellido,direccion)
             .then(res => this.router.navigate(['/listaClientes']))
             .catch(err => alert("Ocurrio un error al intentar almacenar los datos."));
       }
       else
         alert("Ocurrio un error al ingresar los datos. La informacion debe contener al menos 3 caracteres.")
  }
}
