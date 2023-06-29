
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamentos } from 'src/app/shared/models/departamentos.model';
import { DepartamentosService } from '../../shared/services/departamentos.service';
import { Senioridade } from 'src/app/shared/models/senioridade.model';
import { SenioridadeService } from '../../shared/services/senioridade.service';
import { Observable, filter, map, switchMap } from 'rxjs';
import { VerificaEmailService } from './services/verifica-email.service';
import { CadastrosService } from '../cadastros.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private cadastroService: CadastrosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
        email: [null, [Validators.required, Validators.email]],
      }),
      formacao: this.formBuilder.array([]),
      experienciaProf: this.formBuilder.array([])
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    if (this.formulario.valid) {
      this.cadastroService.create(this.formulario.value).subscribe({
        next: success => console.log('Sucesso'),
        error: error => console.error('error')
      });
    } else {
      console.log('Formulário inválido');
    }
  }

  resetar() {
    this.formulario.reset();
  }

  public get formacao() {
    return this.formulario.controls["formacao"] as FormArray
  }

  addExpAcad() {
    const formacaoForm = this.formBuilder.group({
      nomeCurso: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      nomeInstituicao: ['', Validators.required]
    });

    this.formacao.push(formacaoForm);
  }

  excluirExpAcademica(index: number): void {
    this.formacao.removeAt(index);
  }

  public get experienciaProf() {
    return this.formulario.controls["experienciaProf"] as FormArray
  }

  addExpProf() {
    const formacaoProfForm = this.formBuilder.group({
      nomeCargo: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      nomeEmpresa: ['', Validators.required]
    });

    this.experienciaProf.push(formacaoProfForm);
  }

  excluirExpProfissional(index: number): void {
    this.experienciaProf.removeAt(index);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }


}
