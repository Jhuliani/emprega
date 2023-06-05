
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient ){

  }


  ngOnInit() {

    /*
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      area: new FormControl(null),
      nivel: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      setor: [null, Validators.maxLength(20)],
      nivel: [null]
    });

  }

  onSubmit(){
    console.log(this.formulario);

    this.http
    .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .subscribe((dados: any) => console.log(dados));


  }
/*
  VerificaValidTouched(campo){
    this.formulario
    return !campo.valid && campo. touched;
  }

  aplicaCssErro(nome){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback' : this.verificaValidTouched(campo)
    }
  }

*/

verificaEmailInvalido(){
  let campoEmail = this.formulario.get('email');
  if (campoEmail.errors){
    return campoEmail['email'] && campoEmail.touched;
  }
}

}
