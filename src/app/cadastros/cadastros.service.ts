import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from './interfaces/cadastro';
import { Observable, tap } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ExperienciaProf } from './interfaces/experienciaProf';


@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  private readonly API = 'http://localhost:3000/cadastros';


  constructor(private http: HttpClient) { }



  list(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.API)
    .pipe(
      delay(500),
      tap(data => console.log('Dados da API:', data))
    );
  }

  getById(id: number): Observable<Cadastro | null> {
    return this.list().pipe(
      map(cadastros => cadastros.find(cadastro => cadastro.id === id) || null)
    );
  }

  getExpProf(id: number): Observable<ExperienciaProf[]> {
    return new Observable<ExperienciaProf[]>((observer) => {
      this.getById(id).subscribe((result) => {
        let cadastro = result;
        if (cadastro) {
          const experienciasProfissionais = cadastro.experienciaProf;
          observer.next(experienciasProfissionais);
          observer.complete();
        } else {
          observer.error('Cadastro não encontrado');
        }
      });
    });
  }

}


