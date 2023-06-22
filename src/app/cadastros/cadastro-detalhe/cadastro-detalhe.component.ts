import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CadastrosService } from '../cadastros.service';
import { Cadastro } from '../interfaces/cadastro';


@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css']
})
// export class CadastroDetalheComponent implements OnInit, OnDestroy {

//   id!: number;
//   cadastro!: Cadastro | null;
//   inscricao: Subscription = new Subscription();

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private cadastrosService: CadastrosService
//   ) { }

//   ngOnInit() {

//     this.inscricao = this.route.params.subscribe((params: any) => {
//       this.id = params['id'];

//       this.cadastrosService.getById(this.id).subscribe({
//         next: (cadastro: Cadastro | null) => {
//           this.cadastro = cadastro;
//           console.log(this.cadastro);
//         },
//         error: (error: any) => {
//           this.router.navigate(['cadastros/naoEncontrado']);
//         }
//       });
//     });
//   }

//   ngOnDestroy() {
//     if (this.inscricao) {
//       this.inscricao.unsubscribe();
//     }
//   }
// }

export class CadastroDetalheComponent implements OnInit, OnDestroy {
  id!: number;
  cadastro!: Cadastro | null;
  experienciasProfissionais!: ExperienciaProfissional[] | undefined;
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastrosService: CadastrosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.cadastrosService.getById(this.id).subscribe({
        next: (cadastro: Cadastro |null) => {
          this.cadastro = cadastro;
          this.experienciasProfissionais = cadastro?.experienciaProf;

          console.log(this.cadastro);
        },
        error: (error: any) => {
          this.router.navigate(['cadastros/naoEncontrado']);
        }
      });



    });
  }

  ngOnDestroy() {
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }
}




interface ExperienciaProfissional {
  nomeCargo: string;
  dataInicio: Date;
  dataFim: Date;
  nomeEmpresa: string;
}
