import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avaliacao } from 'src/app/shared/modelo/avaliacao';
import { Prestador } from 'src/app/shared/modelo/prestador';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { AvaliacaoService } from 'src/app/shared/servicos/avaliacao.service';
import { PrestadorService } from 'src/app/shared/servicos/prestador-service';
import { UsuarioService } from 'src/app/shared/servicos/usuario.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})
export class AvaliacaoComponent implements OnInit {

  conteudoMensagem: string;
  value: number;
  prestadorAtual: Prestador;
  usuarioAtual: Usuario;
  avaliacaoAtual: Avaliacao;

  constructor(private roteador: Router, private prestadorService: PrestadorService, private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute, private avaliacaoService: AvaliacaoService) {
    this.conteudoMensagem = '';
    this.value = 0;
    this.prestadorAtual = new Prestador();
    this.usuarioAtual = new Usuario();
    this.avaliacaoAtual = new Avaliacao();
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
      };
   }
  }

  ngOnInit(): void {
  }

  formatLabel(value: number): number {
    this.value = value;
    return value;
  }

  enviarAvaliacao(){
    const avaliacaoAEnviar = {
      "prestador": this.prestadorAtual.id,
      "usuario": this.usuarioAtual.id,
      "mensagemAvaliacao": this.conteudoMensagem,
      "avaliacao": this.value
    };
    this.avaliacaoService.enviarAvaliacao(avaliacaoAEnviar).subscribe(
      avaliacaoInserida => {this.roteador.navigate(['/listagemprestadores', this.usuarioAtual.id])
    }
    )
  }
}
