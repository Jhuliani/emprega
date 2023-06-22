export interface Cadastro {
  id: number;
  nome: string;
  customer:String;
  setor: string;
  senioridade: string;
  cidade: string;
  linkedin: string;
  nascimento: Date;
  telefone: string;
  resumo: string;
  experienciaAcad: [{
    nomeCurso: string;
    dataInicio: Date;
    dataFim: Date;
    nomeInstituicao: string;
  }];
  experienciaProf: [{
    nomeCargo: string;
    dataInicio: Date;
    dataFim: Date;
    nomeEmpresa: string;
  }];
}
