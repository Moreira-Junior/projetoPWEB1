import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prestador } from 'src/app/shared/modelo/prestador';
import { PrestadorService } from 'src/app/shared/servicos/prestador-service';

@Component({
  selector: 'app-cadastro-prestador',
  templateUrl: './cadastro-prestador.component.html',
  styleUrls: ['./cadastro-prestador.component.scss']
})
export class CadastroPrestadorComponent implements OnInit {

    prestadorAtual: Prestador;

    inserindo = true;
    nomeBotao = 'Inserir';

    constructor(private rotaAtual: ActivatedRoute, private prestadorService: PrestadorService) {
    this.prestadorAtual = new Prestador('', '', '');
    if (rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('id');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const prestadorEncontrado = this.prestadorService.pesquisarPorId(idParaEdicao).subscribe(
			prestadorEncontrado => this.prestadorAtual = prestadorEncontrado
        );
      }
    }
  }

  ngOnInit(): void {
  }

  inserirOuAtualizarPrestador() {
    if (this.inserindo) {
      this.prestadorService.inserir(this.prestadorAtual).subscribe(
        prestadorInserido => console.log(prestadorInserido)
      );
      this.prestadorAtual = new Prestador('', '', '');
    } else {
      this.prestadorService.atualizar(this.prestadorAtual).subscribe(
        prestadorAtualizado => console.log(prestadorAtualizado)
      )
    }
  }

  atualizaNome(novoNome: string) {
    this.prestadorAtual.nomeFantasia = novoNome;
  }

  

}
