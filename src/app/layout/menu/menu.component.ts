import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/modelo/usuario';
import { UsuarioService } from 'src/app/shared/servicos/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, DoCheck {

  usuarioAtual: Usuario;
  
  constructor(private roteador: Router, private usuarioService: UsuarioService, private rotaAtual: ActivatedRoute) { 
    this.usuarioAtual = new Usuario();
  }
  ngOnInit(): void {
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
      if(idParaEdicao){
        this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
          usuarioEncontrado => this.usuarioAtual = usuarioEncontrado
        );
      }
    }
    console.log(this.usuarioAtual)
  }
  ngDoCheck(): void {
    
  }

}
