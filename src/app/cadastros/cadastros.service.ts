import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from './interfaces/cadastro';
import { Observable, tap } from 'rxjs';
import { delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  private readonly API = 'http://localhost:3000/cadastros';


  constructor(private http: HttpClient) { }



  list(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.API)
    .pipe(
      delay(1000),
      tap(data => console.log('Dados da API:', data))
    );
  }

  getById(id: number): Observable<Cadastro | null> {
    return this.list().pipe(
      map(cadastros => cadastros.find(cadastro => cadastro.id === id) || null)

    );
  }



}


