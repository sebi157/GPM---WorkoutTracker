import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedExercisesService {
  private exercisesSource = new BehaviorSubject<string[]>([]);
  currentExercises = this.exercisesSource.asObservable();

  constructor() { }

  updateExercises(exercises: string[]) {
    this.exercisesSource.next(exercises);
  }
}