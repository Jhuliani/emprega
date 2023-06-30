import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;


  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
    private http: HttpClient) { }


  fazerLogin(usuario: Usuario) {
    if (usuario.nome == 'usuario@gmail.com' &&
      usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  fazerLogout() {

    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
  }




}

