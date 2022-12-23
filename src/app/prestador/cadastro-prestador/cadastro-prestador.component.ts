import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestadorFirestoreService } from 'src/app/shared/servicos/prestador-firestore.service';
import { PrestadorService } from 'src/app/shared/servicos/prestador-service';
import { Prestador } from '../../shared/modelo/prestador';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-prestador',
  templateUrl: './cadastro-prestador.component.html',
  styleUrls: ['./cadastro-prestador.component.scss']
})
export class CadastroPrestadorComponent implements OnInit {

    prestadorAtual: Prestador;
    usuarioAtualId: string;
    inserindo = true;
    nomeBotao = 'Inserir';

    constructor(private rotaAtual: ActivatedRoute, private prestadorService: PrestadorService, private roteador: Router) {
    this.prestadorAtual = new Prestador();
    this.usuarioAtualId = '';
    if (rotaAtual.snapshot.paramMap.has('idUsuario') || rotaAtual.snapshot.paramMap.has('idPrestador')) {
      const idParaEdicao = rotaAtual.snapshot.paramMap.get('idPrestador');
      const idUsuario = rotaAtual.snapshot.paramMap.get('idUsuario');
      if (idParaEdicao) {
        this.inserindo = false;
        this.nomeBotao = 'Atualizar';
        const prestadorEncontrado = this.prestadorService.pesquisarPorId(idParaEdicao).subscribe(
          prestadorEncontrado => this.prestadorAtual = prestadorEncontrado
          );
        }
        if(idUsuario){
          this.usuarioAtualId = idUsuario;
        }
    }
    console.log(this.usuarioAtualId)
  }

  ngOnInit(): void {
  }

  inserirOuAtualizarPrestador() {
    if (this.inserindo) {
      if(this.rotaAtual.snapshot.paramMap.has('idUsuario')){
        const idUsuario = this.rotaAtual.snapshot.paramMap.get('idUsuario');
        if(idUsuario){
          this.usuarioAtualId = idUsuario;
        }
      }
      this.prestadorService.inserir(this.prestadorAtual).subscribe(
        prestadorInserido => {this.roteador.navigate(['listagemprestadores', this.usuarioAtualId]);
        Swal.fire({
          icon: 'success',
          title: 'Prestador cadastrado!',
          showConfirmButton: false,
          timer: 3000
        });
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao cadastrar prestador',
          showConfirmButton: false,
          timer: 3000
        })
      }
      );
      this.prestadorAtual = new Prestador('');
    } else {
      this.prestadorService.atualizar(this.prestadorAtual).subscribe(
        prestadorAtualizado => {
          Swal.fire({
            icon: 'success',
            title: 'Prestador alterado!',
            showConfirmButton: false,
            timer: 3000
          });
          this.roteador.navigate(['listagemprestadores', this.usuarioAtualId]);
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao alterar prestador',
          showConfirmButton: false,
          timer: 3000
        })
      }
      )
    }
  }

  atualizaNome(novoNome: string) {
    this.prestadorAtual.nomeFantasia = novoNome;
  }

  selecaoDeArquivo() {
    const inputNode: any = document.querySelector('.file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.prestadorAtual.avatar = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  

}
