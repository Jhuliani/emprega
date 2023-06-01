import { NgModule } from "@angular/core";
import { PessoasComponent } from './pessoas.component';
import { CommonModule } from "@angular/common";
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoasRoutingModule } from "./pessoas.routing.module";
import { PessoasService } from "./pessoas.service";

@NgModule({
  imports: [
    CommonModule,
    PessoasRoutingModule
  ],
  exports: [],
  declarations: [PessoasComponent, PessoaFormComponent, PessoaDetalheComponent],
  providers: [PessoasService],
})

export class PessoasModule { }
