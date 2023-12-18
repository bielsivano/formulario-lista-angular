import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"formulario",component:FormularioComponent,
  children: [
    { path: "lista", component: ListaComponent
  , children:[
    {path:"historico",component:HistoricoComponent
  }
  ]},

  ]
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
