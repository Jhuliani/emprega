import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './debug-form/debug-form.component';
import { DepartamentosService } from './services/departamentos.service';
import { SenioridadeService } from './services/senioridade.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';



@NgModule({
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMsgComponent,
    FormDebugComponent,
    InputFieldComponent
  ],
  providers: [
    DepartamentosService,
    SenioridadeService
  ]
})
export class SharedModule { }
