import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emprega';

  mostrarMenu: boolean = false;

  constructor( private authService: AuthService){

  }


  logout(){
    this.authService.fazerLogout();
  }

  ngOnInit(){

    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

  }

}
