import { NgModule } from "@angular/core";
import { PessoasComponent } from './pessoas.component';
import { CommonModule } from "@angular/common";
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoasRoutingModule } from "./pessoas.routing.module";
import { PessoasService } from "./pessoas.service";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PessoasRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [PessoasComponent, PessoaFormComponent, PessoaDetalheComponent],
  providers: [PessoasService],
})

export class PessoasModule { }
