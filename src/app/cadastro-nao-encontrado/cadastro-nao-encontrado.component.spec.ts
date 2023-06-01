import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNaoEncontradoComponent } from './cadastro-nao-encontrado.component';

describe('CadastroNaoEncontradoComponent', () => {
  let component: CadastroNaoEncontradoComponent;
  let fixture: ComponentFixture<CadastroNaoEncontradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroNaoEncontradoComponent]
    });
    fixture = TestBed.createComponent(CadastroNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
