import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './debug-form/debug-form.component';
import { DepartamentosService } from './services/departamentos.service';
import { SenioridadeService } from './services/senioridade.service';



@NgModule({
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DepartamentosService,
    SenioridadeService
  ]
})
export class SharedModule { }
