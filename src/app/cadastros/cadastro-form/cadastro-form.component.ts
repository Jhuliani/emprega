
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from 'src/app/shared/models/departamentos.model';
import { DepartamentosService } from '../../shared/services/departamentos.service';
import { Senioridade } from 'src/app/shared/models/senioridade.model';
import { SenioridadeService } from '../../shared/services/senioridade.service';
import { Observable, map } from 'rxjs';
import { VerificaEmailService } from './services/verifica-email.service';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css'],
  preserveWhitespaces: true
})
export class CadastroFormComponent implements OnInit {

  formulario!: FormGroup;
  // departamentos: Departamentos[] = [];
  // niveis: Senioridade[] = [];
  departamentos!: Observable<Departamentos[]>;
  niveis!: Observable<Senioridade[]>;

  experienciasAcademicas: any[] = [];

  experienciasProfissinais: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private departamentosService: DepartamentosService,
    private senioridadeService: SenioridadeService,
    private verificaEmailService: VerificaEmailService) {

  }


  ngOnInit() {

   // this.verificaEmailService.verificarEmail('').subscribe();

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
      email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      senha: [null, Validators.required]
    })





  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario) {
      this.http.post('http://localhost:3000/cadastros', JSON.stringify({}))
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

  validarEmail(formControl: FormControl){
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? {emailInvalido: true} : null));
  }


  adicinonarExpProf(){
    this.experienciasProfissinais.push({});
  }

  excluirExpProf(){
    this.experienciasProfissinais.pop();
  }

}




