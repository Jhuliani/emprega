import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { CadastrosService } from '../cadastros.service';
import { Cadastro } from '../interfaces/cadastro';


@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css']
})
export class CadastroDetalheComponent implements OnInit, OnDestroy {

  // id!: number;
  // cadastro!: Cadastro | null;
  // inscricao: Subscription | undefined;








  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private cadastrosService: CadastrosService) {
  // }


  // ngOnInit() {
  //   // this.inscricao = this.route.params.subscribe(
  //   //   (params: any) => {
  //   //     this.id = params['id'];

  //   //     this.cadastro = this.cadastrosService.getById(this.id);

  //   //     if (this.cadastro == null){
  //   //       this.router.navigate(['cadastros/naoEncontrado']);
  //   //     }
  //   // });


  //   this.inscricao = this.route.params.subscribe((params: any) => {
  //     this.id = params['id'];

  //     this.cadastrosService.getById(this.id).subscribe((cadastro: Cadastro | null) => {
  //       if (cadastro) {
  //         this.cadastro = cadastro;
  //         console.log(this.cadastro);
  //       } else {
  //         this.router.navigate(['cadastros/naoEncontrado']);
  //       }
  //     });
  //   });

  // }

  // ngOnDestroy(){
  //   if (this.inscricao) {
  //     this.inscricao.unsubscribe();
  //   }
  // }







  id!: number;
  cadastro!: Cadastro | null;
  inscricao: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastrosService: CadastrosService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.cadastrosService.getById(this.id).subscribe(
        (cadastro: Cadastro | null) => {
          this.cadastro = cadastro;
          console.log(this.cadastro);
        },
        (error: any) => {
          // Tratar erro, redirecionar para página de cadastro não encontrado
          this.router.navigate(['cadastros/naoEncontrado']);
        }
      );
    });
  }

  ngOnDestroy(){
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }



}

