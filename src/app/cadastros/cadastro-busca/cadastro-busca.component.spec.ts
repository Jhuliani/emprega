import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroBuscaComponent } from './cadastro-busca.component';

describe('CadastroBuscaComponent', () => {
  let component: CadastroBuscaComponent;
  let fixture: ComponentFixture<CadastroBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroBuscaComponent]
    });
    fixture = TestBed.createComponent(CadastroBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
