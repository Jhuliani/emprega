import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from './interfaces/cadastro';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  private readonly API = 'http://localhost:3000/cadastros';

  // getCadastros(){
  //   return[
  //     {id: 1, nome: 'Mauricio Eduardo Gomes', area: 'Comercial', nivel: 'PL'},
  //     {id: 2, nome: 'Marta Aparecida Santos', area: 'Jurídico', nivel: 'JR'}
  //   ]
  // }

  // getCadastro(id: number){
  //   let cadastros = this.getCadastros();
  //   for (let i=0; i<cadastros.length; i++){
  //     let cadastro = cadastros[i];
  //     if (cadastro.id == id){
  //       return cadastro;
  //     }
  //   }
  //   return null;
  // }
  constructor(private http: HttpClient) { }

  // list(){
  //   return this.http.get<Cadastro[]>(this.API)
  //   .pipe(
  //     tap(console.log)
  //   );
  // }

  list() {
    return this.http.get<Cadastro[]>(this.API).pipe(
      tap(data => console.log('Dados da API:', data))
    );
  }

  getById(id: number): Observable<Cadastro | null> {
    return this.list().pipe(
      map(cadastros => cadastros.find(cadastro => cadastro.id === id) || null)

    );
  }



}
