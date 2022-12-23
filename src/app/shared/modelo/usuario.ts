import { Avaliacao } from "./avaliacao";
import { Mensagem } from "./mensagem";

export class Usuario{
    id?: string;
    nome?: string;
    email?: string;
    senha?: string;
    avaliacoes?: Avaliacao;
    mensagens?: Mensagem;
  
    constructor(id: string = '', usuario: Usuario = {}) {
      this.id = id;
      this.nome = usuario.nome;
      this.email = usuario.email;
      this.senha = usuario.senha;
      this.avaliacoes = usuario.avaliacoes;
      this.mensagens = usuario.mensagens;
    }
  }