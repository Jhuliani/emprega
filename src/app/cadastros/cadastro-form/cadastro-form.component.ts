
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from 'src/app/shared/models/departamentos.model';
import { DepartamentosService } from '../../shared/services/departamentos.service';
import { Senioridade } from 'src/app/shared/models/senioridade.model';
import { SenioridadeService } from '../../shared/services/senioridade.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  formulario!: FormGroup;
  // departamentos: Departamentos[] = [];
  // niveis: Senioridade[] = [];
  departamentos!: Observable<Departamentos[]>;
  niveis!: Observable<Senioridade[]>;

  experienciasAcademicas: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private departamentosService: DepartamentosService,
    private senioridadeService: SenioridadeService) {

  }


  ngOnInit() {

    this.departamentos = this.departamentosService.getDepartamentos();
    this.niveis =  this.senioridadeService.getSenioridade();

    // this.departamentosService.getDepartamentos()
    // .subscribe(dados =>{this.departamentos = dados});


    // this.senioridadeService.getDepartamentos()
    // .subscribe(dados =>{this.niveis = dados});

    /*
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      setor: new FormControl(null),
      nivel: new FormControl(null),
      cidade: new FormControl(null),
      linkedin: new FormControl(null),
      nascimento: new FormControl(null),
      telefone: new FormControl(null),
      resumo: new FormControl(null),
      email: new FormControl(null),
      usuario: new FormControl(null),*/

    this.formulario = this.formBuilder.group({

      cabecalho: this.formBuilder.group({
        nome: [null, Validators.required],
        setor: [null, Validators.required],
        nivel: [null, Validators.required],
        cidade: [null, Validators.required],
        linkedin: [null, Validators.required],
        nascimento: [null, Validators.required],
        telefone: [null, Validators.required],
        resumo: [null, Validators.required]
      }),
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    })





  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario) {
      this.http.post('https://httpbin.org/post', JSON.stringify({}))
        .subscribe({
          next: dados => {
            console.log(dados);
            // this.formulario.reset();
          },
          error: error => {
            alert('erro');
          }
        });
    }

    else {
        console.log('formulario invalido');
      /*  Object.keys(this.formulario.controls).forEach(campo => {
            console.log(campo)
        });*/
    }
}



  resetar(){
    this.formulario.reset();
  }


  adicinonarExpAcademica(){
    this.experienciasAcademicas.push({});
  }

  excluirExpAcademica(){
    this.experienciasAcademicas.pop();
  }





}




