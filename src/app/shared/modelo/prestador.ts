export class Prestador {
    id: string;
    nomeFantasia: string;
    especialidade: string;
    avatar: string;
    foto: string;
    servicos: string;
  
    constructor(id: string, nomeFantasia: string, especialidade: string, avatar: string, foto: string, 
      servicos: string) {
      this.id = id;
      this.nomeFantasia = nomeFantasia;
      this.especialidade = especialidade;
      this.avatar = avatar;
      this.foto = foto;
      this.servicos = servicos;
    }
  
  }
  