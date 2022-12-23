import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/layout/menu/menu.component';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService } from 'src/app/shared/servicos/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  usuarioAtual: Usuario;

  constructor(private usuarioService: UsuarioService , private router: Router) { 
    this.usuarioAtual = new Usuario();
  }

  ngOnInit(): void {
  }

  auth(email: string, senha: string){
    this.usuarioService.pesquisarPorEmail(email).subscribe(
      usuarioRetornado => {this.usuarioAtual = usuarioRetornado;
        if(this.usuarioAtual){
          if(this.usuarioAtual.senha === senha){
            this.router.navigate(['listagemprestadores', usuarioRetornado.id])
          }
          else{
            Swal.fire({
                icon: 'error',
                title: 'Login/Senha errados',
                showConfirmButton: false,
                timer: 3000
              })
            }
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Login/Senha errados',
            showConfirmButton: false,
            timer: 3000
          })
        }
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Login/Senha errados',
          showConfirmButton: false,
          timer: 3000
        })
      }
    );
  }

}
