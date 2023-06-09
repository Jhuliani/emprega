import { Injectable } from '@angular/core';
import { Senioridade } from '../models/senioridade.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SenioridadeService {

  constructor(private http: HttpClient) { }

  getSenioridade(){
    return this.http.get<Senioridade[]>('assets/dados/senioridade.json');

  }

}
