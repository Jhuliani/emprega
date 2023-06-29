import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Curriculo } from './interfaces/curriculo';

@Injectable({
  providedIn: 'root'
})
export class CadastrosService2Service extends CrudService<Curriculo> {

  constructor() {
    super();
  }
}
