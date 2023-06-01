import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { CadastrosService } from './cadastros/cadastros.service';
import { CadastroNaoEncontradoComponent } from './cadastro-nao-encontrado/cadastro-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrosComponent,
    HomeComponent,
    LoginComponent,
    CadastroDetalheComponent,
    CadastroNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [CadastrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
