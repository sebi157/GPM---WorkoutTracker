import { TestBed } from '@angular/core/testing';

import { SharedExercisesServiceService } from './shared.exercises.service.service';

describe('SharedExercisesServiceService', () => {
  let service: SharedExercisesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedExercisesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
