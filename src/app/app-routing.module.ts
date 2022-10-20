import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroListagemComponent } from './prestador/cadastro-listagem/cadastro-listagem.component';
import { CadastroPrestadorComponent } from './prestador/cadastro-prestador/cadastro-prestador.component';
import { ListagemPrestadorComponent } from './prestador/listagem-prestador/listagem-prestador.component';

const routes: Routes = [
  {
    path: "listagemprestadores",
    component: ListagemPrestadorComponent
  },
  {
    path: "cadastroprestador",
    component: CadastroPrestadorComponent
  },
  {
    path: "editaprestador/:id",
    component: CadastroPrestadorComponent
  },
  {
    path: "cadastrolistagemprestador",
    component: CadastroListagemComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
