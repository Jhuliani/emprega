import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PessoasComponent } from "./pessoas.component";
import { PessoaDetalheComponent } from "./pessoa-detalhe/pessoa-detalhe.component";
import { PessoaFormComponent } from "./pessoa-form/pessoa-form.component";

const alunosRoutes: any = [
  {path: 'customers', component: PessoasComponent, children : [
    {path: 'novo', component: PessoaFormComponent},
    {path: ':id', component: PessoaDetalheComponent},
    {path: ':id/editar', component: PessoaFormComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule{}
