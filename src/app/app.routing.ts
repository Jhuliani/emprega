import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadastrosComponent } from "./cadastros/cadastros.component";
import { LoginComponent } from "./login/login.component";
import { CadastroDetalheComponent } from './cadastros/cadastro-detalhe/cadastro-detalhe.component';
import { CadastroNaoEncontradoComponent } from './cadastros/cadastro-nao-encontrado/cadastro-nao-encontrado.component';


const APP_ROUTES: Routes = [

  {path: 'login', component: LoginComponent },
  {path: 'curriculums', component: CadastrosComponent},
  {path: 'curriculum/:id', component: CadastroDetalheComponent},
  {path: 'naoEncontrado', component: CadastroNaoEncontradoComponent},
  {path: '', component: HomeComponent}

];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
