import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './debug-form/debug-form.component';



@NgModule({
  declarations: [

    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ]

})
export class SharedModule { }
