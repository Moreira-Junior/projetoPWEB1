import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from 'src/app/shared/modelo/mensagem';
import { Prestador } from 'src/app/shared/modelo/prestador';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { MensagemService } from 'src/app/shared/servicos/mensagem.service';
import { PrestadorService } from 'src/app/shared/servicos/prestador-service';
import { UsuarioService } from 'src/app/shared/servicos/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  prestadorAtual: Prestador;
  usuarioAtual: Usuario;
  mensagens: Mensagem[];
  mensagemAtual: Mensagem;
  conteudoMensagem: string;

  constructor(private roteador: Router, private prestadorService: PrestadorService, private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private mensagemService: MensagemService) {
    this.prestadorAtual = new Prestador();
    this.usuarioAtual = new Usuario();
    this.mensagens = new Array<Mensagem>();
    this.mensagemAtual = new Mensagem('', {});
    this.conteudoMensagem = '';
    if (rotaAtual.snapshot.paramMap.has('usuarioId') && rotaAtual.snapshot.paramMap.has('prestadorId')) {
      const idParaEdicaoUsuario = rotaAtual.snapshot.paramMap.get('usuarioId');
      const idParaEdicaoPrestador = rotaAtual.snapshot.paramMap.get('prestadorId');
      if(idParaEdicaoUsuario && idParaEdicaoPrestador){
        usuarioService.pesquisarPorId(idParaEdicaoUsuario).subscribe(
          usuarioEncontrado => {this.usuarioAtual = usuarioEncontrado;
          }
        );
        prestadorService.pesquisarPorId(idParaEdicaoPrestador).subscribe(
          prestadorEncontrado => {this.prestadorAtual = prestadorEncontrado;
        }
        )
        mensagemService.pesquisarMensagem(idParaEdicaoUsuario, idParaEdicaoPrestador).subscribe(
          mensagensEncontradas =>{
            this.mensagens = mensagensEncontradas;
          }
        )
      };
    }
}

ngOnInit(): void {
}

enviarMensagem(){
  const mensagemAEnviar = {
    "prestador": this.prestadorAtual.id,
    "usuario": this.usuarioAtual.id,
    "conteudoMensagem": this.conteudoMensagem,
    "enviadoPor": "USUARIO"
  };
  this.mensagemService.enviarMensagem(mensagemAEnviar).subscribe(
    mensagemRecebida => {this.atualizarMensagens();
    this.conteudoMensagem = '';
  }
  )
}


atualizarMensagens(){
  if (this.rotaAtual.snapshot.paramMap.has('usuarioId') && this.rotaAtual.snapshot.paramMap.has('prestadorId')) {
    const idParaEdicaoUsuario = this.rotaAtual.snapshot.paramMap.get('usuarioId');
    const idParaEdicaoPrestador = this.rotaAtual.snapshot.paramMap.get('prestadorId');
    if(idParaEdicaoUsuario && idParaEdicaoPrestador){
      this.mensagemService.pesquisarMensagem(idParaEdicaoUsuario, idParaEdicaoPrestador).subscribe(
        mensagensEncontradas =>{
          this.mensagens = mensagensEncontradas;
        }
      )
    };
  }    
}

removerMensagem(mensagem: Mensagem){
  if(mensagem.id){
    this.mensagemService.deletarMensagem(mensagem.id).subscribe(
      removido => {
        Swal.fire({
          icon: 'success',
          title: 'Mensagem apagada!',
          showConfirmButton: false,
          timer: 3000
        });
        const indxmensagem = this.mensagens.findIndex(u => u.id === mensagem.id);

        if (indxmensagem > -1) {
          this.mensagens.splice(indxmensagem, 1);
        }
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Não foi possível excluir a mensagem!',
          showConfirmButton: false,
          timer: 3000
        })
      }
    );
  }
}
}
