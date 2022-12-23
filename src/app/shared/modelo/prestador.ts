import { Avaliacao } from "./avaliacao";
import { Mensagem } from "./mensagem";

export class Prestador {
    id?: string;
    nomeFantasia?: string;
    especialidade?: string;
    avatar?: string;
    foto?: string;
    servicos?: string;
    bairro?: string;
    cidade?: string;
    mensagens?: Mensagem[];
    avaliacaoes?: Avaliacao[];
    avaliacaoMedia?: number;    
  
    constructor(id: string ='', prestador: Prestador = {}) {
      this.id = id;
      this.nomeFantasia = prestador.nomeFantasia;
      this.especialidade = prestador.especialidade;
      this.avatar = prestador.avatar;
      this.foto = prestador.foto;
      this.servicos = prestador.servicos;
      this.bairro = prestador.bairro;
      this.cidade = prestador.cidade;
      this.mensagens = prestador.mensagens;
      this.avaliacaoes = prestador.avaliacaoes;
      this.avaliacaoMedia = prestador.avaliacaoMedia;
      // const sum = this.avaliacaoes?.map(avaliacao => avaliacao.avaliacao || 0).reduce((a, b) => a + b, 0);
      // if(this.avaliacaoes && sum){
      //   const avg = (sum / this.avaliacaoes.length) || 0;
      //   this.avaliacaoMedia = avg;
      // } else {
      //   this.avaliacaoMedia = 0;
      // }
    }
    
  }
  