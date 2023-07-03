
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
import { Curriculo } from '../interfaces/curriculo';
import { Location } from '@angular/common';

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
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {



    //const curriculo = this.route.snapshot.data['curriculo'] //resolve

    this.route.params
    .pipe(
      map((params: any) => params['id']),
      switchMap(id => this.cadastroService.loadById(id)),
      // switchMap(cursos => obterAulas)
    )
    .subscribe(curriculo => this.updateForm(curriculo));


    this.departamentos = this.departamentosService.getDepartamentos();
    this.niveis = this.senioridadeService.getSenioridade();

    this.formulario = this.formBuilder.group({

        _id: [null ],
        nome: [null, Validators.required],
        setor: [null , Validators.required],
        senioridade: [null, Validators.required],
        cidade: [null , Validators.required],
        linkedin: [null , Validators.required],
        nascimento: [null , Validators.required],
        telefone: [null , Validators.required],
        resumo: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],

      token:['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTlkMGZmNDQ4NWJkOTBmMzZkNTNlNyIsImVtYWlsIjoiamh1bGlhbmlzYW50b3NAZ21haWwuY29tIiwibmFtZSI6IkpodWxpIiwicm9sZXMiOlsidXNlciJdLCJpYXQiOjE2ODgzODUyNjQsImV4cCI6MTY4ODQ3MTY2NH0.6x_BaJnTmzelYBSa50AITiakCi31Xh-NNk21PIqjvco'],
      experienciaAcademica: this.formBuilder.array([]),
      experienciaProfissional: this.formBuilder.array([])
    });



  }


    updateForm(curriculo: any) {
      const experienciaAcademicaArray = this.formulario.get('experienciaAcademica') as FormArray;
      experienciaAcademicaArray.clear();

      const experienciaProfissionalArray = this.formulario.get('experienciaProfissional') as FormArray;
      experienciaProfissionalArray.clear();

      curriculo.experienciaAcademica.forEach((experienciaAcademica: any) => {
        experienciaAcademicaArray.push(
          this.formBuilder.group({
            nomeCurso: experienciaAcademica.nomeCurso,
            dataInicio: experienciaAcademica.dataInicio,
            dataFim: experienciaAcademica.dataFim,
            nomeInstituicao: experienciaAcademica.nomeInstituicao
          })
        );
      });

      curriculo.experienciaProfissional.forEach((experienciaProfissional: any) => {
        experienciaProfissionalArray.push(
          this.formBuilder.group({
            nomeCargo: experienciaProfissional.nomeCargo,
            dataInicio: experienciaProfissional.dataInicio,
            dataFim: experienciaProfissional.dataFim,
            nomeEmpresa: experienciaProfissional.nomeEmpresa
          })
        );
      });

      this.formulario.patchValue({

          _id: curriculo._id,
          nome: curriculo.nome,
          setor: curriculo.setor,
          senioridade: curriculo.senioridade,
          cidade: curriculo.cidade,
          linkedin: curriculo.linkedin,
          nascimento: curriculo.nascimento,
          telefone: curriculo.telefone,
          resumo: curriculo.resumo,
          email: curriculo.email

      });
    }




  onSubmit() {
    console.log(this.formulario.value);


    if (this.formulario.valid) {
      console.log('submit');
      this.cadastroService.save(this.formulario.value).subscribe({
        next: () => {
          console.log('Sucesso');
          this.location.back();
        },
        error: () => console.error('error')
    });

    } else {
      console.log('Formulário inválido');
    }
  }

  resetar() {
    this.formulario.reset();
  }

  public get experienciaAcademica() {
    return this.formulario.controls["experienciaAcademica"] as FormArray
  }

  addExpAcad() {
    const experienciaAcademicaForm = this.formBuilder.group({
      nomeCurso: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      nomeInstituicao: ['', Validators.required]
    });

    this.experienciaAcademica.push(experienciaAcademicaForm);
  }

  excluirExpAcademica(index: number): void {
    this.experienciaAcademica.removeAt(index);
  }

  public get experienciaProfissional() {
    return this.formulario.controls["experienciaProfissional"] as FormArray
  }

  addExpProf() {
    const formacaoProfForm = this.formBuilder.group({
      nomeCargo: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      nomeEmpresa: ['', Validators.required]
    });

    this.experienciaProfissional.push(formacaoProfForm);
  }

  excluirExpProfissional(index: number): void {
    this.experienciaProfissional.removeAt(index);
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  }


}
