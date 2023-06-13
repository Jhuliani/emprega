import { ExperienciaAcad } from "./experienciaAcad";
import { ExperienciaProf } from "./experienciaProf";


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
  experienciaAcad: ExperienciaAcad[];
  experienciaProf: ExperienciaProf[];
  email: string;
  senha: string;

}
