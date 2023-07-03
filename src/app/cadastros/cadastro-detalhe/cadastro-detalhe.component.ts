import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  experienciasProfissionais: ExperienciaProfissional[] | null = [];
  experienciasAcademicas: ExperienciaAcademica[] | null = [];
  inscricao: Subscription = new Subscription();
  @ViewChild('deleteModal', { static: true }) deleteModal: any;
  curriculoSelecionado!: Curriculo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastrosService: CadastrosService
  ) { }


  ngOnInit() {




    this.inscricao = this.route.params.subscribe({
      next: (params: any) => {
        this.id = params['id'];

        this.cadastrosService.getById(this.id).subscribe({
          next: (curriculo: Curriculo | null) => {
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
          error: (error: any) => {
            this.router.navigate(['cadastros/naoEncontrado']);
          }
        });
      }
    });

  }

  onEdit(_id: any){
    this.router.navigate(['editar'], { relativeTo: this.route});
  }

  onDelete(curriculo: any) {

    this.curriculoSelecionado = curriculo;

  }

  // onConfirmDelete() {
  //   this.cadastrosService.delete(this.curriculoSelecionado.id)

  // }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


}
