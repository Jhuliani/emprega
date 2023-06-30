
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { Customer } from './customers';


@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private readonly API = 'http://localhost:3000/customers';


  constructor(private http: HttpClient) { }



  list(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API)
    .pipe(
      delay(500),
      tap(data => console.log('Dados da API:', data))
    );
  }


  loadById(id: any){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  getById(id: string): Observable<Customer | null> {
    return this.list().pipe(
      map(cadastros => cadastros.find(cadastro => cadastro._id === id) || null)
    );
  }


  create(cadastro: Customer) {
    return this.http.post(this.API, cadastro).pipe(take(1));
  }

  update(customer: Customer){
    return this. http.put(`${this.API}/${customer._id}`, customer).pipe(take(1));
  }

  save(customer: Customer){
    if(customer._id){
      return this.update(customer);
    }
    return this.create(customer);
  }

}


