import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subscription, catchError } from 'rxjs';
import { CadastrosService } from '../cadastros.service';
import { Curriculo } from '../interfaces/curriculo';
import { ExperienciaProfissional } from '../interfaces/experienciaProfissional';
import { ExperienciaAcademica } from '../interfaces/experienciaAcademica';
import { Location } from '@angular/common';



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
  curriculos$!: Observable<Curriculo[]>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastrosService: CadastrosService,
    private location: Location

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

  onRefresh() {
    this.curriculos$ = this.cadastrosService.list().pipe(

      catchError(error => {
        console.error(error);
        return EMPTY;
      })
    )}



  onEdit(_id: any){
    this.router.navigate(['editar'], { relativeTo: this.route});
  }

  onDelete(id: any) {

    this.cadastrosService.remove(id)
    .subscribe({
      next: () => {
        console.log('Sucesso');
        //this.onRefresh()
        this.location.back();
      },
      error: () => console.error('error')
  })

  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }


}
