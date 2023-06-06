import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './debug-form/debug-form.component';
import { DropdownService } from '../dropdown.service';



@NgModule({
  declarations: [

    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [DropdownService]

})
export class SharedModule { }
