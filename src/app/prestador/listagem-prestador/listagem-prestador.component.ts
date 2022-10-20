import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestador } from 'src/app/shared/modelo/prestador';
import { PrestadorService } from 'src/app/shared/servicos/prestador-service';

@Component({
  selector: 'app-listagem-prestador',
  templateUrl: './listagem-prestador.component.html',
  styleUrls: ['./listagem-prestador.component.scss']
})
export class ListagemPrestadorComponent implements OnInit {

  prestadores: Prestador[]

  constructor(private roteador: Router, private prestadorService: PrestadorService) {
    this.prestadores = new Array<Prestador>();
  }

  ngOnInit(): void {
    this.prestadorService.listar().subscribe(
    prestadoresRetornados => this.prestadores = prestadoresRetornados
    );
  }

  removerPrestador(prestadorARemover: Prestador): void {
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
