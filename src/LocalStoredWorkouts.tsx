import data from './assets/data.json'
import WorkoutTypes from "./WorkoutTypes-interface"

export class LocalStorageWorkouts {

    workouts: WorkoutTypes[] = [];

    constructor() {
        if (!localStorage.getItem("workouts")) {
            localStorage.setItem("workouts", JSON.stringify(data));
        }
        let localStoredWorkouts = localStorage.getItem("workouts");
        if (localStoredWorkouts) {
            this.workouts = JSON.parse(localStoredWorkouts);
        }
    }


    trainingDays(): { day1: WorkoutTypes[], day2: WorkoutTypes[], day3: WorkoutTypes[] } {

        //let workouts: WorkoutTypes[] = [];
        let day1: WorkoutTypes[] = [];
        let day2: WorkoutTypes[] = [];
        let day3: WorkoutTypes[] = [];

        this.workouts.forEach(workout => {
            if (workout.day == 1) {
                day1.push(workout);
            }
            if (workout.day == 2) {
                day2.push(workout);
            }
            if (workout.day == 3) {
                day3.push(workout);
            }
        });

        return { day1, day2, day3 }
    }

    ChangeIfCompleted(id: number): boolean {
        let testBool: boolean = false;
        this.workouts.forEach(workout => {

            if (workout.id == id) {
                if (workout.isCompleted == true) {
                    workout.isCompleted = false
                    testBool = false;
                } else {
                    workout.isCompleted = true
                    testBool = true;
                }
            }
        });

        console.log(id);


        localStorage.setItem("workouts", JSON.stringify(this.workouts));

        return testBool
    }

}
