import { TestBed } from '@angular/core/testing';

import { CadastrosService2Service } from './cadastros-service2.service';

describe('CadastrosService2Service', () => {
  let service: CadastrosService2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrosService2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
