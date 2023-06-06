import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpProfComponent } from './form-exp-prof.component';

describe('FormExpProfComponent', () => {
  let component: FormExpProfComponent;
  let fixture: ComponentFixture<FormExpProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormExpProfComponent]
    });
    fixture = TestBed.createComponent(FormExpProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
