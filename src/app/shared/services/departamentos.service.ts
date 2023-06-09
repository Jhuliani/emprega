import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamentos } from '../models/departamentos.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  constructor(private http: HttpClient) { }

  getDepartamentos(){
    return this.http.get<Departamentos[]>('assets/dados/departamentos.json');

  }

}
