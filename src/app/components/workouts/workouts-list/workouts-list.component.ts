import { Component, OnInit } from '@angular/core';
import { Workout } from '../../../models/workout.model';
import { CommonModule } from '@angular/common';
import { WorkoutsService } from '../../../services/workouts.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workouts-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './workouts-list.component.html',
  styleUrl: './workouts-list.component.css'
})
export class WorkoutsListComponent implements OnInit{
  workouts: Workout[] = [];
  
  constructor(private workoutsService: WorkoutsService ) {}
  
  ngOnInit(): void {
    this.workoutsService.getAllWorkouts().subscribe({
      next: (workouts) => {
        workouts.forEach(wko => {
          wko.w_Date = wko.w_Date.toString();
        });
        this.workouts = workouts;
      },
      error: (response) => {
        console.log(response);
      }
    }) 
    console.log(this.workouts);
  }
  
}
