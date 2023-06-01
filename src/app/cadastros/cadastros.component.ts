import { Component } from '@angular/core';
import { CadastrosService } from './cadastros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent {

  cadastros: any[] = [];
  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private cadastrosService: CadastrosService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.cadastros = this.cadastrosService.getCadastros();

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


}
