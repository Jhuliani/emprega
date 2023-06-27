
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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


  constructor(
    private formBuilder: FormBuilder,
    private departamentosService: DepartamentosService,
    private senioridadeService: SenioridadeService,
    private verificaEmailService: VerificaEmailService,
    private cadastroService: CadastrosService) {

  }


  ngOnInit() {


    this.departamentos = this.departamentosService.getDepartamentos();
    this.niveis = this.senioridadeService.getSenioridade();


    this.formulario = this.formBuilder.group({

      cabecalho: this.formBuilder.group({
        nome: [null, Validators.required],
        setor: [null, Validators.required],
        senioridade: [null, Validators.required],
        cidade: [null, Validators.required],
        linkedin: [null, Validators.required],
        nascimento: [null, Validators.required],
        telefone: [null, Validators.required],
        resumo: [null, Validators.required],
        email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
      }),

      formacao: this.formBuilder.array([]),
      experienciaProf: this.formBuilder.array([])

    });


  }

  onSubmit() {

    console.log(this.formulario.value);

    if (this.formulario) {
      this.cadastroService.create(this.formulario.value).subscribe(
        sucess => console.log('Sucesso'),
        error => console.error('error')
      );
    }

    else {
      console.log('formulario invalido');
    }
  }

  resetar() {
    this.formulario.reset();
  }


  adicinonarExpAcademica(): void {
    const expAcademica = this.formBuilder.group({
      nomeCurso: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required],
      nomeInstituicao: [null, Validators.required]
    });

    const formacaoControl = this.formulario.get('formacao');
    if (formacaoControl instanceof FormArray) {
      formacaoControl.push(expAcademica);
    }

  }

  excluirExpAcademica(): void {
    const formacao = this.formulario.get('formacao') as FormArray;
    formacao.removeAt(formacao.length - 1);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }


  adicinonarExpProf() {
    const expProfissional = this.formBuilder.group({
      nomeCargo: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required],
      nomeEmpresa: [null, Validators.required]
    });

    const expProfControl = this.formulario.get('experienciaProf');
    if (expProfControl instanceof FormArray) {
      expProfControl.push(expProfissional);
    }
  }

  excluirExpProf() {
    const experienciaProf = this.formulario.get('experienciaProf') as FormArray;
    experienciaProf.removeAt(experienciaProf.length - 1);
  }



}




