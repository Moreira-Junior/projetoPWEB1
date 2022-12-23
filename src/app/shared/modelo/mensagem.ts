import { Prestador } from "./prestador";
import { Usuario } from "./usuario";

export class Mensagem {
    id?: string;
    dateStamp?: Date;
    conteudoMensagem?: string;
    enviadoPor?: string;
  
    constructor(id: string = '', mensagem: Mensagem = {}) {
      this.id = id;
      this.dateStamp = mensagem.dateStamp;
      this.conteudoMensagem = mensagem.conteudoMensagem;
      this.enviadoPor = mensagem.enviadoPor;
    }
}