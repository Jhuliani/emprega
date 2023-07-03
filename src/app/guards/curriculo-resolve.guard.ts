import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curriculo } from '../cadastros/interfaces/curriculo';
import { Injectable } from '@angular/core';
import { CadastrosService } from '../cadastros/cadastros.service';


@Injectable({ providedIn: 'root' })

export class CurriculoResolveGuard {

  constructor(private cadastroService: CadastrosService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curriculo> {

    if(route.params && route.params['id']){
      return this.cadastroService.loadById(route.params['id'])
    }
    return of({
      _id: null,
      nome: null,
      setor: null,
      senioridade: null,
      cidade: null,
      linkedin: null,
      nascimento: null,
      telefone: null,
      resumo: null,
      email: null,
      experienciaProfissional: null,
      experienciaAcademica: null
    })
  }
}
