import { NgModule } from "@angular/core";

import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CadastrosComponent } from "./cadastros.component";
import { CadastroDetalheComponent } from './cadastro-detalhe/cadastro-detalhe.component';
import { CadastroNaoEncontradoComponent } from './cadastro-nao-encontrado/cadastro-nao-encontrado.component';



const cadastrosRoutes: Routes = [
  {path: 'cadastros',
   component: CadastrosComponent},
  {path: 'naoEncontrado', component: CadastroNaoEncontradoComponent},
  {path: 'cadastro/:id', component: CadastroDetalheComponent},

];




@NgModule({
  imports: [RouterModule.forChild(cadastrosRoutes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule {}
