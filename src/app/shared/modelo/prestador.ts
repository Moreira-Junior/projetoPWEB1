export class Prestador {
    id?: string;
    nomeFantasia?: string;
    especialidade?: string;
    avatar?: string;
    foto?: string;
    servicos?: string;
  
    constructor(id: string ='', prestador: Prestador = {}) {
      this.id = id;
      this.nomeFantasia = prestador.nomeFantasia;
      this.especialidade = prestador.especialidade;
      this.avatar = prestador.avatar;
      this.foto = prestador.foto;
      this.servicos = prestador.servicos;
    }
  
  }
  