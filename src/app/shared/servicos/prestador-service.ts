import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Prestador } from '../modelo/prestador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  URL_Prestadores = 'http://localhost:3000/prestadores';

  constructor(private clienteHttp: HttpClient) { }

  inserir(novoPrestador: Prestador): Observable<Prestador> {
    return this.clienteHttp.post<Prestador>(
      this.URL_Prestadores, novoPrestador);
  }

  apagar(idParaRemocao: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_Prestadores}/${idParaRemocao}`);
  }

  pesquisarPorId(id: string): Observable<Prestador> {
    return this.clienteHttp.get<Prestador>(`${this.URL_Prestadores}/${id}`);
  }

  atualizar(Prestador: Prestador): Observable<Prestador> {
    return this.clienteHttp
      .put<Prestador>(`${this.URL_Prestadores}/${Prestador.id}`, Prestador);
  }

  listar(): Observable<Prestador[]> {
    return this.clienteHttp.get<Prestador[]>(this.URL_Prestadores);
  }

}
