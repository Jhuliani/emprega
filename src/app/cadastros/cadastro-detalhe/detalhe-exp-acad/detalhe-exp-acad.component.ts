import { Component, Input } from '@angular/core';
import { ExperienciaAcademica } from '../../interfaces/experienciaAcademica';

@Component({
  selector: 'app-detalhe-exp-acad',
  templateUrl: './detalhe-exp-acad.component.html',
  styleUrls: ['./detalhe-exp-acad.component.css']
})
export class DetalheExpAcadComponent {

  @Input() expAcademica!: ExperienciaAcademica;

}
