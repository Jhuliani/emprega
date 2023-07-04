"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  setor: {
    type: String,
    required: true,
  },
  senioridade: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  nascimento: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  resumo: {
    type: String,
    required: true,
  },

  experienciaProfissional: [
    {
      nomeEmpresa: {
        type: String,
        required: true,
      },
      nomeCargo: {
        type: String,
        required: true,
      },
      dataInicio: {
        type: String,
        required: true,
      },
      dataFim: {
        type: String,
        required: true,
      },
    },
  ],
  experienciaAcademica: [
    {
      nomeInstituicao: {
        type: String,
        required: true,
      },
      nomeCurso: {
        type: String,
        required: true,
      },
      dataInicio: {
        type: String,
        required: true,
      },
      dataFim: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Curriculum", schema);
