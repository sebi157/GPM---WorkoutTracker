import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { Workout } from '../../models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './add-workout.component.html',
  styleUrl: './add-workout.component.css'
})
export class AddWorkoutComponent{
  addWorkoutRequest: Workout={
    id:'',
    name:'',
    description:'',
    w_Date: '',
    exercises:[]
  }

  constructor(private workoutService: WorkoutsService, private router: Router) {}

  addExercise(newExercise: string): void {
    console.log(newExercise);
    if (newExercise.trim() !== '') { 
      this.addWorkoutRequest.exercises.push(newExercise);
    }
  }

  addWorkout(){
    this.workoutService.addWorkout(this.addWorkoutRequest).subscribe({
      next: (workout_gotback) => {
        this.router.navigate(['workouts'])
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
