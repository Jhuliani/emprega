import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CadastrosService } from '../cadastros.service';
import { Curriculo } from '../interfaces/curriculo';
import { ExperienciaProfissional } from '../interfaces/experienciaProfissional';
import { ExperienciaAcademica } from '../interfaces/experienciaAcademica';

@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css']
})
export class CadastroDetalheComponent implements OnInit, OnDestroy {
  id!: string;
  curriculo!: Curriculo | null;
  experienciasProfissionais: ExperienciaProfissional[] = [];
  experienciasAcademicas: ExperienciaAcademica[] = [];
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastrosService: CadastrosService
  ) { }


  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.cadastrosService.getById(this.id).subscribe(
        (curriculo: Curriculo | null) => {
          this.curriculo = curriculo;

          if (curriculo) {
            this.experienciasProfissionais = curriculo.experienciaProfissional;
            this.experienciasAcademicas = curriculo.experienciaAcademica;
          } else {
            this.experienciasProfissionais = [];
            this.experienciasAcademicas = [];
          }

          console.log(this.experienciasProfissionais);
          console.log(this.experienciasAcademicas);
        },
        (error: any) => {
          this.router.navigate(['cadastros/naoEncontrado']);
        }
      );
    });
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
