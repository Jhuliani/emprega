
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamentos } from 'src/app/shared/models/departamentos.model';
import { DepartamentosService } from '../../shared/services/departamentos.service';
import { Senioridade } from 'src/app/shared/models/senioridade.model';
import { SenioridadeService } from '../../shared/services/senioridade.service';
import { Observable, map, switchMap } from 'rxjs';
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
    private router: Router) {

  }


  ngOnInit() {

    // let registro = null;

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);
    //     const curriculo$ = this.cadastroService.loadById(id);
    //     curriculo$.subscribe(curriculo => {
    //       registro = curriculo;
    //       this.updateForm(curriculo);
    //     })
    //   }
    // );


    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.cadastroService.loadById(id))
    )
    .subscribe( curriculo => this.updateForm(curriculo));




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

      formacao: this.formBuilder.array([this.criarExpAcademicaGroup()]),
      experienciaProf: this.formBuilder.array([])

    });

  }

  updateForm(curriculo: any){
    this.formulario.patchValue({
      _id: curriculo._id,
      nome: curriculo.nome,
      setor: curriculo.setor,
      senioridade: curriculo.senioridade,
      telefone: curriculo.telefone,
      email: curriculo.email,
      linkedin: curriculo.linkedin,
      nascimento: curriculo.nascimento,
      resumo: curriculo.resumo,
      experienciaAcad: curriculo.experienciaAcad,
      experienciaProf: curriculo.experienciaProf
    })
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


  // adicinonarExpAcademica(): void {
  //   const expAcademica = this.formBuilder.group({
  //     nomeCurso: [null, Validators.required],
  //     dataInicio: [null, Validators.required],
  //     dataFim: [null, Validators.required],
  //     nomeInstituicao: [null, Validators.required]
  //   });

  //   const formacaoControl = this.formulario.get('formacao') as FormArray;
  //   formacaoControl.push(expAcademica);
  // }

  private criarExpAcademicaGroup():  FormGroup{
    return new FormGroup({
      'nomeCurso': new FormControl('', Validators.required),
      'dataInicio': new FormControl('', Validators.required),
      'dataFim': new FormControl('', Validators.required),
      'nomeInstituicao': new FormControl('', Validators.required)
    })
  }

  addExpAcad(){
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


  adicinonarExpProf(): void {
    const expProfissional = this.formBuilder.group({
      nomeCargo: [null, Validators.required],
      dataInicio: [null, Validators.required],
      dataFim: [null, Validators.required],
      nomeEmpresa: [null, Validators.required]
    });

    const expProfControl = this.formulario.get('experienciaProf') as FormArray;
    expProfControl.push(expProfissional);
  }


  excluirExpProf() {
    const experienciaProf = this.formulario.get('experienciaProf') as FormArray;
    experienciaProf.removeAt(experienciaProf.length - 1);
  }



}




