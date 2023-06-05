import { NgModule } from "@angular/core";

import { CadastrosComponent } from "./cadastros.component";
import { CadastroDetalheComponent } from "./cadastro-detalhe/cadastro-detalhe.component";
import { CadastroNaoEncontradoComponent } from "./cadastro-nao-encontrado/cadastro-nao-encontrado.component";
import { CadastrosService } from "./cadastros.service";
import { CommonModule } from "@angular/common";
import { CadastrosRoutingModule } from "./cadastros.routing.module";
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module.ts/shared.module.ts.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    exports: [],
    declarations: [
        CadastrosComponent,
        CadastroDetalheComponent,
        CadastroNaoEncontradoComponent,
        CadastroFormComponent
    ],
    providers: [CadastrosService],
    imports: [
        CommonModule,
        FormsModule,
        CadastrosRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule

    ]
})
export class CadastrosModule { }
