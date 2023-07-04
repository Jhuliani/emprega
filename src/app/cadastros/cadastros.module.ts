import { NgModule } from "@angular/core";

import { CadastrosComponent } from "./cadastros.component";
import { CadastroDetalheComponent } from "./cadastro-detalhe/cadastro-detalhe.component";
import { CadastroNaoEncontradoComponent } from "./cadastro-nao-encontrado/cadastro-nao-encontrado.component";
import { CadastrosService } from "./cadastros.service";
import { CommonModule } from "@angular/common";
import { CadastrosRoutingModule } from "./cadastros.routing.module";
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormExpAcadComponent } from './cadastro-form/form-exp-acad/form-exp-acad/form-exp-acad.component';
import { FormExpProfComponent } from './cadastro-form/form-exp-prof/form-exp-prof/form-exp-prof.component';
import { VerificaEmailService } from "./cadastro-form/services/verifica-email.service";
import { SharedModule } from "../shared/shared.module";
import { DetalheExpProfComponent } from './cadastro-detalhe/detalhe-exp-prof/detalhe-exp-prof.component';
import { DetalheExpAcadComponent } from './cadastro-detalhe/detalhe-exp-acad/detalhe-exp-acad.component';
import { AuthService } from "../login/auth.service";



@NgModule({
    exports: [],
    declarations: [
        CadastrosComponent,
        CadastroDetalheComponent,
        CadastroNaoEncontradoComponent,
        CadastroFormComponent,
        FormExpAcadComponent,
        FormExpProfComponent,
        DetalheExpProfComponent,
        DetalheExpAcadComponent,

    ],
    providers: [CadastrosService,
                VerificaEmailService,
                AuthService],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        CadastrosRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule,

    ]
})
export class CadastrosModule { }
