import { Time } from "@angular/common";

export interface Workout {
    id: string;
    name: string;
    description: string;
    w_Date: string | Date;
    exercises: string[];
}
