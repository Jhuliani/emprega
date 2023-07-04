'use strict';
const mongoose = require('mongoose');
const Curriculo = mongoose.model('Curriculum');

exports.get = async() => {
    const res = await Curriculo.find({});
    return res;
}

exports.getById = async(id) => {
    const res = await Curriculo
        .findById(id);
    return res;
}


exports.create = async(data) => {
    var product = new Curriculo(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Curriculo.findByIdAndUpdate(id, {
      $set: {
        nome: data.nome,
        setor: data.setor,
        senioridade: data.senioridade,
        cidade: data.cidade,
        linkedin: data.linkedin,
        nascimento: data.nascimento,
        telefone: data.telefone,
        email: data.email,
        resumo: data.resumo,
        experienciaProfissional: data.experienciaProfissional,
        experienciaAcademica: data.experienciaAcademica
      }
    });
  

};

exports.delete = async(id) => {
    await Curriculo
        .findByIdAndRemove(id);
}

exports.authenticate = async(data) => {
    const res = await Curriculo.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}