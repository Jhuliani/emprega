import { Component } from '@angular/core';
import { CadastrosService } from './cadastros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject, Subscription, catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';
import { Curriculo } from './interfaces/curriculo';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent {
  cadastros$!: Observable<Curriculo[]>;


  error$ = new Subject<boolean>();

  pagina!: number;
  inscricao!: Subscription;
  queryField = new FormControl();
  results$!: Observable<any>;


  constructor(
    private cadastrosService: CadastrosService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {}

  ngOnInit() {


    this.cadastros$ = this.cadastrosService.list()
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
    this.router.navigate(['/cadastros'],
    {queryParams:  {'pagina': ++this.pagina}});
  }

  novoCadastro(){
    this.router.navigate(['cadastros/novo']);
  }


}
