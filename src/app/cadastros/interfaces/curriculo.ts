import { ExperienciaAcademica } from "./experienciaAcademica";
import { ExperienciaProfissional } from "./experienciaProfissional";

export interface Curriculo {
  _id: string | null;
  nome: string | null;
  setor: string | null;
  senioridade: string | null;
  cidade: string | null;
  linkedin: string | null;
  nascimento: string | null;
  telefone: string | null;
  resumo: string | null;
  email: string | null;
  experienciaProfissional: ExperienciaProfissional[] | null;
  experienciaAcademica: ExperienciaAcademica[] | null;
}

