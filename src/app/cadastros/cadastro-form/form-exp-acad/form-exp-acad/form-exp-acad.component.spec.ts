import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpAcadComponent } from './form-exp-acad.component';

describe('FormExpAcadComponent', () => {
  let component: FormExpAcadComponent;
  let fixture: ComponentFixture<FormExpAcadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormExpAcadComponent]
    });
    fixture = TestBed.createComponent(FormExpAcadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
