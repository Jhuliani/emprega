import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CadastrosService } from '../cadastros.service';


@Component({
  selector: 'app-cadastro-detalhe',
  templateUrl: './cadastro-detalhe.component.html',
  styleUrls: ['./cadastro-detalhe.component.css']
})
export class CadastroDetalheComponent {

  id!: number;
  inscricao!: Subscription;
  cadastro: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadastrosService: CadastrosService) {
  }


  ngOnInit() {
    this.cadastro = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.cadastro = this.cadastrosService.getCadastro(this.id);

        if (this.cadastro == null){
          this.router.navigate(['/naoEncontrado']);
        }

    });

  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }


}
