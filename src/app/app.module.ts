import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioClientesComponent } from './componentes/formulario-clientes/formulario-clientes.component';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioClientesComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
