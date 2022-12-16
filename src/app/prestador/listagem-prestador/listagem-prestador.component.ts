import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestadorFirestoreService } from 'src/app/shared/servicos/prestador-firestore.service';
import { PrestadorService } from 'src/app/shared/servicos/prestador-service';
import { Prestador } from '../../shared/modelo/prestador';

@Component({
  selector: 'app-listagem-prestador',
  templateUrl: './listagem-prestador.component.html',
  styleUrls: ['./listagem-prestador.component.scss']
})
export class ListagemPrestadorComponent implements OnInit {

  prestadores: Prestador[]
  filtro: string;

  constructor(private roteador: Router, private prestadorService: PrestadorService) {
    this.prestadores = new Array<Prestador>();
    this.filtro = "";
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
