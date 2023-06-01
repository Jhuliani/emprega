import { NgModule } from "@angular/core";

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadastrosComponent } from "./cadastros/cadastros.component";
import { LoginComponent } from "./login/login.component";
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { CadastroNaoEncontradoComponent } from './cadastro-nao-encontrado/cadastro-nao-encontrado.component';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastros', component: CadastrosComponent},
  {path: 'cadastro/:id', component: CadastroDetalheComponent},
  {path: 'naoEncontrado', component: CadastroNaoEncontradoComponent},
  {path: '', component: HomeComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
