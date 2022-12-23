import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from 'src/app/shared/modelo/mensagem';
import { MensagemService } from 'src/app/shared/servicos/mensagem.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-mensagem',
  templateUrl: './editar-mensagem.component.html',
  styleUrls: ['./editar-mensagem.component.scss']
})
export class EditarMensagemComponent implements OnInit {

  mensagemAtual: Mensagem;
  mensagemAtualId: string;
  textoMensagem?: string;
  usuarioId?: string;
  prestadorId?: string;

  constructor(private rotaAtual: ActivatedRoute, private mensagemService: MensagemService, private roteador: Router) {
    this.mensagemAtual = new Mensagem();
    this.mensagemAtualId = '';
    this.textoMensagem = '';
    this.usuarioId = '';
    this.prestadorId = '';
    if (rotaAtual.snapshot.paramMap.has('mensagemId') && rotaAtual.snapshot.paramMap.has('prestadorId') && rotaAtual.snapshot.paramMap.has('usuarioId')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('mensagemId');
      this.prestadorId = rotaAtual.snapshot.paramMap.get('prestadorId') || '';
      this.usuarioId = rotaAtual.snapshot.paramMap.get('usuarioId') || '';
      if (idParaEdicao) {
        this.mensagemAtualId = idParaEdicao;
        const mensagemEncontrada = this.mensagemService.pesquisarMensagemPorId(idParaEdicao).subscribe(
			mensagemEnc => {this.mensagemAtual = mensagemEnc;
      this.textoMensagem = mensagemEnc.conteudoMensagem;
    }
        );
      }
    }
   }

  ngOnInit(): void {
  }

  editarMensagem(){
    this.mensagemAtual.conteudoMensagem = this.textoMensagem;
    this.mensagemService.atualizarMensagem(this.mensagemAtual).subscribe(
      mensagemAtualizado => {this.roteador.navigate(['/chat', this.usuarioId, this.prestadorId]);
      Swal.fire({
        icon: 'success',
        title: 'Mensagem alterada!',
        showConfirmButton: false,
        timer: 3000
      });
    },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Não foi possível alterar a mensagem!',
        showConfirmButton: false,
        timer: 3000
      })
    }
    )
  }

}
