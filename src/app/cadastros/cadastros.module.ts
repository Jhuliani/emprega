import { NgModule } from "@angular/core";

import { CadastrosComponent } from "./cadastros.component";
import { CadastroDetalheComponent } from "./cadastro-detalhe/cadastro-detalhe.component";
import { CadastroNaoEncontradoComponent } from "./cadastro-nao-encontrado/cadastro-nao-encontrado.component";
import { CadastrosService } from "./cadastros.service";
import { CommonModule } from "@angular/common";
import { CadastrosRoutingModule } from "./cadastros.routing.module";
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
//import { RouterModule } from "@angular/router";

@NgModule({
  imports:[
    CommonModule,
    CadastrosRoutingModule
    //RouterModule
  ],
  exports: [],
  declarations: [
    CadastrosComponent,
    CadastroDetalheComponent,
    CadastroNaoEncontradoComponent,
    CadastroFormComponent
  ],
  providers: [CadastrosService],
})
export class CadastrosModule { }
