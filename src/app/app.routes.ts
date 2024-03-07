import { Routes } from '@angular/router';
import { WorkoutsListComponent } from './components/workouts/workouts-list/workouts-list.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { ExercisesFormComponent } from './components/exercises-form/exercises-form.component';
import { EditWorkoutComponent } from './components/workouts/edit-workout/edit-workout.component';

export const routes: Routes = [
    {
        path: '',
        component:WorkoutsListComponent
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