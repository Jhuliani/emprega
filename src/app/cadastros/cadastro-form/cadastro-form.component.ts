
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Departamentos } from 'src/app/shared/models/departamentos.model';
import { DepartamentosService } from '../../shared/services/departamentos.service';
import { Senioridade } from 'src/app/shared/models/senioridade.model';
import { SenioridadeService } from '../../shared/services/senioridade.service';
import { Observable, map } from 'rxjs';
import { VerificaEmailService } from './services/verifica-email.service';
import { CadastrosService } from '../cadastros.service';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css'],
  preserveWhitespaces: true
})
export class CadastroFormComponent implements OnInit {

  formulario!: FormGroup;

  departamentos!: Observable<Departamentos[]>;
  niveis!: Observable<Senioridade[]>;

  experienciasAcademicas: any[] = [];

  experienciasProfissinais: any[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private departamentosService: DepartamentosService,
    private senioridadeService: SenioridadeService,
    private verificaEmailService: VerificaEmailService,
    private cadastroService: CadastrosService) {

  }


  ngOnInit() {


    this.departamentos = this.departamentosService.getDepartamentos();
    this.niveis =  this.senioridadeService.getSenioridade();



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
      // email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      // senha: [null, Validators.required]
    })





  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario) {
      this.http.post('http://localhost:3000/curriculums', JSON.stringify({}))
        .subscribe({
          next: dados => {
            console.log(dados);
          },
          error: error => {
            alert('erro');
          }
        });
    }

    else {
        console.log('formulario invalido');

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




