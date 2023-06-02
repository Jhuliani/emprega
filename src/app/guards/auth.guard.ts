import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { Usuario } from '../login/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  usuarioAutenticado(){
    return this.usuarioAutenticado;
  }


}
