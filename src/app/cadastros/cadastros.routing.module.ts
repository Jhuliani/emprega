import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from "./cadastros.component";
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { CadastroNaoEncontradoComponent } from './cadastro-nao-encontrado/cadastro-nao-encontrado.component';
import { AuthGuard } from "../guards/auth.guard";



const cadastrosRoutes: Routes = [
  {path: 'cadastros',
   component: CadastrosComponent, canActivate: [AuthGuard] },
  {path: 'naoEncontrado', component: CadastroNaoEncontradoComponent, canActivate: [AuthGuard] },
  {path: 'cadastro/:id', component: CadastroDetalheComponent, canActivate: [AuthGuard] },

];




@NgModule({
  imports: [RouterModule.forChild(cadastrosRoutes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule {}
