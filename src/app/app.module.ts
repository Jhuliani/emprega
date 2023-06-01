import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastrosModule } from './cadastros/cadastros.module';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoasModule } from './pessoas/pessoas.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    CadastrosModule,
    PessoasModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
