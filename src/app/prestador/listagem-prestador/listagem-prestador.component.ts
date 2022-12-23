import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avaliacao } from 'src/app/shared/modelo/avaliacao';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { PrestadorFirestoreService } from 'src/app/shared/servicos/prestador-firestore.service';
import { PrestadorService } from 'src/app/shared/servicos/prestador-service';
import { UsuarioService } from 'src/app/shared/servicos/usuario.service';
import { Prestador } from '../../shared/modelo/prestador';

@Component({
  selector: 'app-listagem-prestador',
  templateUrl: './listagem-prestador.component.html',
  styleUrls: ['./listagem-prestador.component.scss']
})
export class ListagemPrestadorComponent implements OnInit {

  usuarioAtual: Usuario;
  prestadores: Prestador[]
  filtro: string;

  constructor(private roteador: Router, private prestadorService: PrestadorService, private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute) {
    this.prestadores = new Array<Prestador>();
    this.usuarioAtual = new Usuario();
    this.filtro = "";
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if(idParaEdicao){
        usuarioService.pesquisarPorId(idParaEdicao).subscribe(
          usuarioEncontrado => this.usuarioAtual = usuarioEncontrado
        );
      }
    }
  }

  ngOnInit(): void {
    this.prestadorService.listar().subscribe(
    prestadoresRetornados => this.prestadores = prestadoresRetornados
    );
  }

  removerPrestador(prestadorARemover: Prestador): void {
    if(prestadorARemover.id){
      this.prestadorService.apagar(prestadorARemover.id).subscribe(
        removido => {
          console.log(removido);
          const indxprestador = this.prestadores.findIndex(u => u.id === prestadorARemover.id);
  
          if (indxprestador > -1) {
            this.prestadores.splice(indxprestador, 1);
          }
  
        }
      );
    }
  }

  limparFiltro(){
    this.filtro = "";
    this.filtrarNome(this.filtro);
  }

  filtrarNome(filtro: string){
    if(filtro != ""){
      this.prestadorService.listarComFiltroDeNome(filtro).subscribe(
        prestadoresRetornados => this.prestadores = prestadoresRetornados
        );
    }
    else {
      this.prestadorService.listar().subscribe(
        prestadoresRetornados => this.prestadores = prestadoresRetornados
        );
    }
  }
}
