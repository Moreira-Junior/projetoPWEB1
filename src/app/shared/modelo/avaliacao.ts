import { Prestador } from "./prestador";
import { Usuario } from "./usuario";

export class Avaliacao {
    id?: string;
    avaliacao?: number;
    mensagemAvaliacao?: string;
  
    constructor(id: string = '', avaliacaoInserida: Avaliacao = {}) {
      this.id = id;
      this.avaliacao = avaliacaoInserida.avaliacao;
      this.mensagemAvaliacao = avaliacaoInserida.mensagemAvaliacao;
    }
}