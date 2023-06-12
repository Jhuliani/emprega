import { ExpAcademica } from "./exp-acad";
import { ExpProfissional } from "./exp-prof";

export interface Cadastro {
  id: number;
  nome: string;
  setor: string;
  senioridade: string;
  cidade: string;
  linkedin: string;
  nascimento: Date;
  telefone: string;
  resumo: string;
  experienciaAcad: ExpAcademica[];
  experienciaProf: ExpProfissional[];
  email: string;
  senha: string;

}
