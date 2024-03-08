import { Component, OnInit } from '@angular/core';
import { Workout } from '../../../models/workout.model';
import { CommonModule } from '@angular/common';
import { WorkoutsService } from '../../../services/workouts.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-workouts-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,FontAwesomeModule],
  templateUrl: './workouts-list.component.html',
  styleUrl: './workouts-list.component.css'
})
export class WorkoutsListComponent implements OnInit{
  workouts: Workout[] = [];
  sortDirection = 'desc'; // or 'asc'
  faPenToSquare = faPenToSquare;
  faSort = faSort;

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
  
  sortWorkoutsByDate(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  
    this.workouts.sort((a, b) => {
      const dateA = new Date(a.w_Date);
      const dateB = new Date(b.w_Date);
  
      if (dateA < dateB) return this.sortDirection === 'asc' ? -1 : 1;
      if (dateA > dateB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
  
}
