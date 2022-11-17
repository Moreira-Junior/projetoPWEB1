import { Injectable } from '@angular/core';
import { Prestador } from '../modelo/prestador';
import { from, map, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PrestadorFirestoreService {

  colecaoPrestadores: AngularFirestoreCollection<Prestador>;
  NOME_COLECAO = 'prestadores';

  constructor(private afs: AngularFirestore) {
    this.colecaoPrestadores = afs.collection(this.NOME_COLECAO);
  }

  inserir(novoPrestador: Prestador): Observable<Prestador> {
    delete novoPrestador.id;
    return from(this.colecaoPrestadores.add({ ...novoPrestador }));
  }

  apagar(idParaRemocao: string): Observable<void> {
    return from(this.colecaoPrestadores.doc(idParaRemocao).delete());
  }

  pesquisarPorId(id: string): Observable<Prestador> {
    return this.colecaoPrestadores.doc(id).get()
      .pipe(map(document => new Prestador(document.id, document.data())));
  }

  atualizar(prestador: Prestador): Observable<void> {
    const id = prestador.id;
    delete prestador.id;

    return from(this.colecaoPrestadores.doc(id)
      .update(Object.assign({}, prestador)));
  }

  listar(): Observable<Prestador[]> {
    return this.colecaoPrestadores.valueChanges({ idField: 'id' });
  }

}
