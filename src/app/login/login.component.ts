import { Component, OnInit, Output } from '@angular/core';

import { Usuario } from './usuario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService){

  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }

  @ Output() fazerLogout(){
    this.authService.fazerLogout();
  }

  ngOnInit(){

  }

}
