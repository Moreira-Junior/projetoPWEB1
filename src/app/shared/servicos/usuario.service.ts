import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_Usuarios = 'http://localhost:8080/usuarios';

  constructor(private clienteHttp: HttpClient) { }

  inserir(novoUsuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.post<Usuario>(
      this.URL_Usuarios, novoUsuario);
  }

  apagar(idParaRemocao: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_Usuarios}/${idParaRemocao}`);
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.clienteHttp.get<Usuario>(`${this.URL_Usuarios}/${id}`);
  }

  pesquisarPorEmail(email: string): Observable<Usuario> {
    return this.clienteHttp.get<Usuario>(`${this.URL_Usuarios}/email/${email}`)
  }

  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp
      .put<Usuario>(`${this.URL_Usuarios}/${usuario.id}`, usuario);
  }

  listar(): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(this.URL_Usuarios);
  }

}
