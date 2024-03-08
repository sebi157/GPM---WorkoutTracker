import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { WorkoutsService } from '../../../services/workouts.service';
import { Workout } from '../../../models/workout.model';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-workout',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './edit-workout.component.html',
  styleUrl: './edit-workout.component.css'
})
export class EditWorkoutComponent implements OnInit{
  
  
  newExercise: string = '';
  workoutDetails: Workout = {
    id:'',
    name:'',
    description:'',
    w_Date: '',
    exercises:[]
  }
  
  constructor(private route: ActivatedRoute, private workoutService: WorkoutsService, private router: Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) =>{
        const id = params.get('id');
        if(id){
          this.workoutService.getWorkout(id).subscribe({
            next: (response) => {
                this.workoutDetails = response;
            }
          });
        }
      }
    })

    
  }

  deleteExercise(index: number): void {
    this.workoutDetails.exercises.splice(index, 1);
  }

  addExercise(): void {
    if (this.newExercise.trim() !== '') {
      this.workoutDetails.exercises.push(this.newExercise);
      this.newExercise = '';
    }
  }

  updateWorkout(){
    this.workoutService.updateWorkout(this.workoutDetails.id, this.workoutDetails).subscribe({
      next: (workout_gotback) => {
        this.router.navigate(['workouts'])
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  deleteWorkout(id: string) {
    const isConfirmed = confirm('Are you sure you want to delete this workout?');
    
    if (isConfirmed) {
      this.workoutService.deleteWorkout(id).subscribe({
        next: (value) => {
          console.log('Workout deleted successfully.');
          this.router.navigate(['workouts']);
        },
        error: (error) => {
          console.error('Error deleting workout:', error);
        }
      });
    }
  }
}
