import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private pessoas: any[] = [
    {id: 1, nome: 'Pessoa 01', email: 'pessoa@email.com'},
    {id: 2, nome: 'Pessoa 02', email: 'pessoa@email.com'},
    {id: 3, nome: 'Pessoa 03', email: 'pessoa@email.com'}
  ]

  getPessoas(){
    return this.pessoas;
  }

  constructor() { }
}
