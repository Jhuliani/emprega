import { Component, Input } from '@angular/core';
import {ExperienciaProf } from '../../interfaces/experienciaProf';

@Component({
  selector: 'app-detalhe-exp-prof',
  templateUrl: './detalhe-exp-prof.component.html',
  styleUrls: ['./detalhe-exp-prof.component.css']
})
export class DetalheExpProfComponent {


  @Input() expProfissional!: ExperienciaProf;
}
