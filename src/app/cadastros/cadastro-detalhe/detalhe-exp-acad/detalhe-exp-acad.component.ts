import { Component, Input } from '@angular/core';
import { ExperienciaAcad } from '../../interfaces/experienciaAcad';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastrosService } from '../../cadastros.service';
import { Subscription } from 'rxjs';
import { Cadastro } from '../../interfaces/cadastro';

@Component({
  selector: 'app-detalhe-exp-acad',
  templateUrl: './detalhe-exp-acad.component.html',
  styleUrls: ['./detalhe-exp-acad.component.css']
})
export class DetalheExpAcadComponent {

  @Input() expAcademica!: ExperienciaAcad;



}
