import { TestBed } from '@angular/core/testing';

import { CrudFormService } from './crud-form.service';

describe('CrudFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudFormService = TestBed.get(CrudFormService);
    expect(service).toBeTruthy();
  });
});
