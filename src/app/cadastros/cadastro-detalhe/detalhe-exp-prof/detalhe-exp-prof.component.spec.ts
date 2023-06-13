import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheExpProfComponent } from './detalhe-exp-prof.component';

describe('DetalheExpProfComponent', () => {
  let component: DetalheExpProfComponent;
  let fixture: ComponentFixture<DetalheExpProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheExpProfComponent]
    });
    fixture = TestBed.createComponent(DetalheExpProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
