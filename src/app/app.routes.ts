import { Routes } from '@angular/router';
import { WorkoutsListComponent } from './components/workouts/workouts-list/workouts-list.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { EditWorkoutComponent } from './components/workouts/edit-workout/edit-workout.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/workouts',
        pathMatch: 'full'
    },
    {
        path: 'workouts',
        component:WorkoutsListComponent
    },
    {
        path: 'workouts/add',
        component: AddWorkoutComponent
    },
    {
        path: 'workouts/edit/:id',
        component: EditWorkoutComponent
    }
];