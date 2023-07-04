import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curriculo } from './interfaces/curriculo';
import { Observable, tap } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { ExperienciaProfissional } from './interfaces/experienciaProfissional';
import { AuthService } from '../login/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  private readonly API = 'http://localhost:3000/curriculums';


  constructor(private http: HttpClient,
    private authService: AuthService) { }



  list(): Observable<Curriculo[]> {
    return this.http.get<Curriculo[]>(this.API)
    .pipe(
      delay(500),
      tap(data => console.log('Dados da API:', data))
    );
  }


  loadById(id: any){
    return this.http.get<Curriculo>(`${this.API}/${id}`).pipe(take(1));
  }

  getById(id: string): Observable<Curriculo | null> {
    return this.list().pipe(
      map(cadastros => cadastros.find(cadastro => cadastro._id === id) || null)
    );
  }

  getExpProfById(id: string): Observable<ExperienciaProfissional[] | null> {
    return this.getById(id).pipe(
      map(curriculo => curriculo ? curriculo.experienciaProfissional : [])
    );

  }



  private create(cadastro: Curriculo) {
    return this.http.post(this.API, cadastro).pipe(take(1));

  }


  private update(curriculo: Curriculo){
    return this. http.put(`${this.API}/${curriculo._id}`, curriculo).pipe(take(1));
  }

  save(curriculo: Curriculo){
    if(curriculo._id){
      return this.update(curriculo);
    }
    return this.create(curriculo);
  }

  remove(id: string){

    console.log(id);
    return this. http.delete(`${this.API}/${id}`).pipe(take(1));

  }

  urlSearch():string {
    return this.API;
  }

}


