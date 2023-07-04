"use strict";

const ValidationContract = require("../validators/fluent-validator");
const repository = require("../repositories/curriculum-repository");
// var config = require("../config");
const authService = require('../services/auth-service');
const emailService = require('../services/email-service');

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.getById = async (req, res, next) => {
  try {
    var data = await repository.getById(req.params.id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(
    req.body.nome,
    3,
    "Nome deve conter pelo menos 3 caracteres"
  );
  contract.hasMinLen(
    req.body.cidade,
    3,
    "Cidade deve conter pelo menos 3 caracteres"
  );
  contract.hasMinLen(
    req.body.telefone,
    11,
    "O telefone deve conter pelo menos 11 caracteres"
  );
  // contract.isEmail(req.body.isEmail, "Email inválido");
 

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try { 
    //recupera o token 
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    //decodifica
    const data = await authService.decodeToken(token);

    await repository.create({

      customer: data.id, // guarda o id do usuario que cadastrou esse curriculo 
      nome: req.body.nome,      
      setor: req.body.setor,
      senioridade: req.body.senioridade,
      cidade: req.body.cidade,
      linkedin: req.body.linkedin,
      nascimento: req.body.nascimento,
      telefone: req.body.telefone,
      email:req.body.email,
      resumo: req.body.resumo,

      // customer: data.id,
      // cabecalho: req.body.cabecalho,
      experienciaProfissional: req.body.experienciaProfissional,
      experienciaAcademica: req.body.experienciaAcademica
    });

    emailService.send(
      req.body.email,
      'Currículo cadastrado!',
      global.EMAIL_TMPL_CRRL.replace('{0}', req.body.nome));     


    res.status(201).send({
      message: "Produto cadastrado com sucesso!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.id, req.body);
    res.status(200).send({
      message: "Produto atualizado com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await repository.delete(req.params.id);
    res.status(200).send({
      message: "Produto removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar sua requisição",
    });
  }
};
  
