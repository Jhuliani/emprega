import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDetalheComponent } from './cadastro-detalhe.component';

describe('CadastroDetalheComponent', () => {
  let component: CadastroDetalheComponent;
  let fixture: ComponentFixture<CadastroDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroDetalheComponent]
    });
    fixture = TestBed.createComponent(CadastroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
