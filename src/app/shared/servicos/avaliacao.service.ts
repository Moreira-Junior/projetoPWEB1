import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avaliacao } from '../modelo/avaliacao';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  URL_Avaliacoes = 'http://localhost:8080/avaliacoes';

  constructor(private clienteHttp: HttpClient) { }

  pesquisarMensagem(usuarioId: string, prestadorId: string): Observable<Avaliacao[]> {
    return this.clienteHttp.get<Avaliacao[]>(`${this.URL_Avaliacoes}/${usuarioId}/${prestadorId}`);
  }

  enviarAvaliacao(mensagem: Avaliacao): Observable<Avaliacao>{
    return this.clienteHttp.post<Avaliacao>(this.URL_Avaliacoes, mensagem);
  }
}
