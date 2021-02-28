import { Routes, RouterModule } from '@angular/router';
import { FormularioClientesComponent } from './componentes/formulario-clientes/formulario-clientes.component';
import { ListaClientesComponent } from './componentes/lista-clientes/lista-clientes.component';

/** Genero las rutas para direccionar los componentes */
const appRoutes:Routes = [
    {path:'formularioClientes',component:FormularioClientesComponent},
    {path: 'listaClientes', component: ListaClientesComponent},
    {path: '',redirectTo:'/formularioClientes',pathMatch:'full'}
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash:true});