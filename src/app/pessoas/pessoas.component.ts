import { Component } from '@angular/core';
import { PessoasService } from './pessoas.service';
import { Customer } from './customers';
import { EMPTY, Observable, Subject, Subscription, catchError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {
  customers$!: Observable<Customer[]>;
  error$ = new Subject<boolean>();

  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private pessoasService: PessoasService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {

    this.customers$ = this.pessoasService.list()
    .pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return EMPTY;
      })
    );

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
    this.router.navigate(['/customers'],
    {queryParams:  {'pagina': ++this.pagina}});
  }

  novoCadastro(){
    this.router.navigate(['customers/novo']);
  }


}
