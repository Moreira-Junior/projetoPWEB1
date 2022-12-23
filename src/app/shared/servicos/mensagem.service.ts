import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuPositionX } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { Mensagem } from '../modelo/mensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  URL_Mensagens = 'http://localhost:8080/mensagens';

  constructor(private clienteHttp: HttpClient) { }

  pesquisarMensagem(usuarioId: string, prestadorId: string): Observable<Mensagem[]> {
    return this.clienteHttp.get<Mensagem[]>(`${this.URL_Mensagens}/${usuarioId}/${prestadorId}`);
  }

  pesquisarMensagemPorId(id: string): Observable<Mensagem>{
    return this.clienteHttp.get<Mensagem>(`${this.URL_Mensagens}/${id}`);
  }

  enviarMensagem(mensagem: Mensagem): Observable<Mensagem>{
    return this.clienteHttp.post<Mensagem>(this.URL_Mensagens, mensagem);
  }

  deletarMensagem(idParaRemocao: string): Observable<object>{
    return this.clienteHttp.delete(`${this.URL_Mensagens}/${idParaRemocao}`);
  }

  atualizarMensagem(mensagem: Mensagem): Observable<Mensagem>{
    return this.clienteHttp.put<Mensagem>(`${this.URL_Mensagens}/${mensagem.id}`, mensagem);
  }
}
