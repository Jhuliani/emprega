import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoCpntrolErroComponent } from './campo-control-erro.component';

describe('CampoCpntrolErroComponent', () => {
  let component: CampoCpntrolErroComponent;
  let fixture: ComponentFixture<CampoCpntrolErroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampoCpntrolErroComponent]
    });
    fixture = TestBed.createComponent(CampoCpntrolErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
