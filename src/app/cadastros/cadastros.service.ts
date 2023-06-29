import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curriculo } from './interfaces/curriculo';
import { Observable, tap } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { ExperienciaProfissional } from './interfaces/experienciaProfissional';


@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  private readonly API = 'http://localhost:3000/curriculums';


  constructor(private http: HttpClient) { }



  list(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.API)
    .pipe(
      delay(500),
      tap(data => console.log('Dados da API:', data))
    );
  }


  loadById(id: any){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  getById(id: string): Observable<Curriculo | null> {
    return this.list().pipe(
      map(cadastros => cadastros.find(cadastro => cadastro._id === id) || null)
    );
  }

  getExpProfById(id: string): Observable<ExperienciaProfissional[]> {
    return this.getById(id).pipe(
      map(curriculo => curriculo ? curriculo.experienciaProfissional : [])
    );

  }

  create(cadastro: Curriculo) {
    return this.http.post(this.API, cadastro).pipe(take(1));
  }

  update(curriculo: Curriculo){
    return this. http.put(`${this.API}/${curriculo._id}`, curriculo).pipe(take(1));
  }

  save(curriculo: Curriculo){
    if(curriculo._id){
      return this.update(curriculo);
    }
    return this.create(curriculo);
  }

}


