import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  getCadastros(){
    return[
      {id: 1, nome: 'Mauricio Eduardo Gomes', area: 'Comercial', nivel: 'PL'},
      {id: 2, nome: 'Marta Aparecida Santos', area: 'Jurídico', nivel: 'JR'}
    ]
  }

  getCadastro(id: number){
    let cadastros = this.getCadastros();
    for (let i=0; i<cadastros.length; i++){
      let cadastro = cadastros[i];
      if (cadastro.id == id){
        return cadastro;
      }
    }
    return null;
  }
  constructor() { }
}
