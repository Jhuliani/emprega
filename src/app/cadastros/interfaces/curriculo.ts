import { ExperienciaAcademica } from "./experienciaAcademica";
import { ExperienciaProfissional } from "./experienciaProfissional";

export interface Curriculo {
  _id: string;
  nome: string;
  setor: string;
  senioridade: string;
  cidade: string;
  linkedin: string;
  nascimento: string;
  telefone: string;
  resumo: string;
  email: string;
  experienciaProfissional: ExperienciaProfissional[];
  experienciaAcademica: ExperienciaAcademica[];
}

