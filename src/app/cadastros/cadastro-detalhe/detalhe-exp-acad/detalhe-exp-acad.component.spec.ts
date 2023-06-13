import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheExpAcadComponent } from './detalhe-exp-acad.component';

describe('DetalheExpAcadComponent', () => {
  let component: DetalheExpAcadComponent;
  let fixture: ComponentFixture<DetalheExpAcadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheExpAcadComponent]
    });
    fixture = TestBed.createComponent(DetalheExpAcadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
