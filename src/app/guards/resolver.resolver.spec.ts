import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolverResolver } from './curriculo-resolve.guard';

describe('resolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
      TestBed.runInInjectionContext(() => resolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
