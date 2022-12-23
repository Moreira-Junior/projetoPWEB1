import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService} from 'src/app/shared/servicos/usuario.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuarioAtual : Usuario;

  constructor(private roteador: Router, private usuarioService: UsuarioService) {
    this.usuarioAtual = new Usuario('', {});
  }

  ngOnInit(): void {
  }

  inserirUsuario(){
    this.usuarioService.inserir(this.usuarioAtual).subscribe(
      usuarioInserido => {
        Swal.fire({
          icon: 'success',
          title: 'Usuário cadastrado!',
          showConfirmButton: false,
          timer: 3000
        });
        this.roteador.navigate(['loginusuario']);
    },
    error => {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar usuário',
        showConfirmButton: false,
        timer: 3000
      })
    }
    );
  }
}