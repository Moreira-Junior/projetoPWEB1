import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AvaliacaoComponent } from './prestador/avaliacao/avaliacao.component';
import { CadastroListagemComponent } from './prestador/cadastro-listagem/cadastro-listagem.component';
import { CadastroPrestadorComponent } from './prestador/cadastro-prestador/cadastro-prestador.component';
import { ChatComponent } from './prestador/chat/chat.component';
import { EditarMensagemComponent } from './prestador/editar-mensagem/editar-mensagem.component';
import { ListagemPrestadorComponent } from './prestador/listagem-prestador/listagem-prestador.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  {
    path: "listagemprestadores/:id",
    component: ListagemPrestadorComponent
  },
  {
    path: "cadastroprestador",
    component: CadastroPrestadorComponent
  },
  {
    path: "cadastroprestador/:idUsuario",
    component: CadastroPrestadorComponent
  },
  {
    path: "editaprestador/:idUsuario/:idPrestador",
    component: CadastroPrestadorComponent
  },
  {
    path: "editaprestador/:idUsuario",
    component: CadastroPrestadorComponent
  },
  {
    path: "cadastrolistagemprestador",
    component: CadastroListagemComponent
  },
  {
    path: "cadastrousuario",
    component: CadastroUsuarioComponent
  },
  {
    path: "loginusuario",
    component: LoginComponent
  },
  {
    path: "chat/:usuarioId/:prestadorId",
    component: ChatComponent
  },
  {
    path: "avaliar/:usuarioId/:prestadorId",
    component: AvaliacaoComponent
  },
  {
    path: "editarmensagem/:usuarioId/:prestadorId/:mensagemId",
    component: EditarMensagemComponent
  },
  {
    path: "",
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
