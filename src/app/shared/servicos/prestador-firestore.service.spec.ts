import { TestBed } from '@angular/core/testing';

import { PrestadorFirestoreService } from './prestador-firestore.service';

describe('UsuarioFirestoreService', () => {
  let service: PrestadorFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestadorFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
