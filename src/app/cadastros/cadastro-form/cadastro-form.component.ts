
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
  ) {}

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
      formacao: this.formBuilder.array([this.criarExpAcademicaGroup()]),
      experienciaProf: this.formBuilder.array([this.criarExpProfGroup()])
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

  private criarExpAcademicaGroup(): FormGroup {
    return new FormGroup({
      'nomeCurso': new FormControl('', Validators.required),
      'dataInicio': new FormControl('', Validators.required),
      'dataFim': new FormControl('', Validators.required),
      'nomeInstituicao': new FormControl('', Validators.required)
    });
  }

  addExpAcad() {
    const formacao = this.formulario.get('formacao') as FormArray;
    formacao.push(this.criarExpAcademicaGroup());
  }

  excluirExpAcademica(): void {
    const formacao = this.formulario.get('formacao') as FormArray;
    formacao.removeAt(formacao.length - 1);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }

  private criarExpProfGroup(): FormGroup {
    return new FormGroup({
      'nomeCargo': new FormControl('', Validators.required),
      'dataInicio': new FormControl('', Validators.required),
      'dataFim': new FormControl('', Validators.required),
      'nomeEmpresa': new FormControl('', Validators.required)
    });
  }

  addExpProf() {
    const experienciaProf = this.formulario.get('experienciaProf') as FormArray;
    experienciaProf.push(this.criarExpProfGroup());
  }

  excluirExpProf() {
    const experienciaProf = this.formulario.get('experienciaProf') as FormArray;
    experienciaProf.removeAt(experienciaProf.length - 1);
  }
}
