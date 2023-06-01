import { Component } from '@angular/core';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {
  pessoas: any[] = [];

  constructor(private pessoasService: PessoasService){

  }

  ngOnInit() {
    this.pessoas = this.pessoasService.getPessoas();
  }



}
