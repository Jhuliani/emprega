import { Component } from '@angular/core';
import { CadastrosService } from './cadastros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cadastro } from './interfaces/cadastro';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent {

  cadastros: Cadastro[] = [];
  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private cadastrosService: CadastrosService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {

    this.cadastrosService.list()
    .subscribe(dados => this.cadastros = dados);

    //this.cadastros = this.cadastrosService.getCadastros();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    this.router.navigate(['/cadastros'],
    {queryParams:  {'pagina': ++this.pagina}});
  }

  novoCadastro(){
    this.router.navigate(['cadastros/novo']);
  }

}
