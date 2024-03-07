import { Component, Input, NgModule, Output, input } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { SharedExercisesService } from '../../services/shared.exercises.service.service';

@Component({
  selector: 'app-exercises-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './exercises-form.component.html',
  styleUrl: './exercises-form.component.css'
})
export class ExercisesFormComponent {
  exercises: string[] = [];

  constructor(private sharedExercisesService: SharedExercisesService) {}

  addExercise(): void {
    this.exercises.push('');
    this.sharedExercisesService.updateExercises(this.exercises);
  }
}
