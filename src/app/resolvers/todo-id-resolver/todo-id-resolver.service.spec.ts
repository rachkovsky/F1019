import { TestBed } from '@angular/core/testing';

import { TodoIdResolverService } from './todo-id-resolver.service';

describe('TodoIdResolverService', () => {
  let service: TodoIdResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoIdResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
