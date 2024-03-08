import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './add-workout.component.html',
  styleUrl: './add-workout.component.css'
})
export class AddWorkoutComponent{
  newExercise: string = '';
  addWorkoutRequest: Workout={
    id:'',
    name:'',
    description:'',
    w_Date: '',
    exercises:[]
  }

  constructor(private workoutService: WorkoutsService, private router: Router) {}

  addExercise(): void {
    if (this.newExercise.trim() !== '') { 
      this.addWorkoutRequest.exercises.push(this.newExercise);
      this.newExercise = ''
    }
  }

  deleteExercise(index: number): void {
    this.addWorkoutRequest.exercises.splice(index, 1);
  }


  addWorkout(){
    this.workoutService.addWorkout(this.addWorkoutRequest).subscribe({
      next: (workout_gotback) => {
        this.router.navigate(['workouts'])
      },
      error: (errorResponse) => {
        if (errorResponse.error && errorResponse.error.errors) {
          const errors = errorResponse.error.errors;
          const errorMessages: any[] = [];
          Object.keys(errors).forEach(key => {
            errors[key].forEach((message: any) => {
              errorMessages.push(message);
            });
          });
          alert(`One or more validation errors occurred:\n\n${errorMessages.join('\n')}`);
        } else {
          alert('An unexpected error occurred.');
        }
      }
    });
  }
}
