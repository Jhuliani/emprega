import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from "./cadastros.component";
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { CadastroNaoEncontradoComponent } from './cadastro-nao-encontrado/cadastro-nao-encontrado.component';
import { AuthGuard } from "../guards/auth.guard";
import { CadastroFormComponent } from "./cadastro-form/cadastro-form.component";



const cadastrosRoutes: Routes = [
  {path: '', component: CadastrosComponent, canActivate: [AuthGuard] },
  {path: 'naoEncontrado', component: CadastroNaoEncontradoComponent, canActivate: [AuthGuard] },
  {path: 'novo', component: CadastroFormComponent, canActivate: [AuthGuard] },
  {path: ':id', component: CadastroDetalheComponent, canActivate: [AuthGuard] },
  {path: ':id/editar', component: CadastroFormComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [RouterModule.forChild(cadastrosRoutes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule {}
