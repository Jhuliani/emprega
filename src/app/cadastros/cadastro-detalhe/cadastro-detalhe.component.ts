import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CadastrosService } from '../cadastros.service';


@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css']
})
export class CadastroDetalheComponent implements OnInit, OnDestroy {

  id!: number;
  inscricao!: Subscription;
  cadastro: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastrosService: CadastrosService) {
  }


  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.cadastro = this.cadastrosService.getCadastro(this.id);

        if (this.cadastro == null){
          this.router.navigate(['cadastros/naoEncontrado']);
        }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}

