import data from '../assets/data.json'
import WorkoutTypes from "./WorkoutTypes-interface"

//En klass för att ladda in data från extern fil till localstorage med metoder för att manipulera localstorage
export class LocalStorageWorkouts {

    //Array med workout objekt
    workouts: WorkoutTypes[] = [];

    //Konstuktorn läser in data från fil om det inte redan finns
    constructor() {
        if (!localStorage.getItem("workouts")) {
            localStorage.setItem("workouts", JSON.stringify(data));
        }
        this.loadWorkouts();
    }

    //Laddar in data från localstorage till arrayen med workout objekt
    loadWorkouts() {
        let localStoredWorkouts = localStorage.getItem("workouts");
        if (localStoredWorkouts) {
            this.workouts = JSON.parse(localStoredWorkouts);
        }

    }

    //Metod som returnerar tre objectarrayer beroende på vilken dag de tillhör
    trainingDays(): { day1: WorkoutTypes[], day2: WorkoutTypes[], day3: WorkoutTypes[], day4: WorkoutTypes[], day5: WorkoutTypes[], day6: WorkoutTypes[], day7: WorkoutTypes[], day8: WorkoutTypes[] } {

        let day1: WorkoutTypes[] = [];
        let day2: WorkoutTypes[] = [];
        let day3: WorkoutTypes[] = [];
        let day4: WorkoutTypes[] = [];
        let day5: WorkoutTypes[] = [];
        let day6: WorkoutTypes[] = [];
        let day7: WorkoutTypes[] = [];
        let day8: WorkoutTypes[] = [];

        //Sorterar data till tre olika arrayer
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
            if (workout.day == 4) {
                day4.push(workout);
            }
            if (workout.day == 5) {
                day5.push(workout);
            }
            if (workout.day == 6) {
                day6.push(workout);
            }
            if (workout.day == 7) {
                day7.push(workout);
            }
            if (workout.day == 8) {
                day8.push(workout);
            }
        });

        return { day1, day2, day3, day4, day5, day6, day7, day8 }
    }

    //Metod som ändrar om träningen är klar eller ej i localstorage samt returnerar bool som svar
    changeIfCompleted(id: number): boolean {
        let testBool: boolean = false;

        //Kontrollerar hur id överens stämmer med vad som redan är lagrat (i localstorage då det är en ny instance som initierar construktor)
        //Sen ändras värdet till true eller false i this.workout
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

        //till sist sparas det nya värdet i localstorage.
        localStorage.setItem("workouts", JSON.stringify(this.workouts));

        return testBool
    }

    //Enkel reset metod som helt enkelt läser in datan igen från fil där alla träningar är markerade som oklara.
    resetWeek(): void {
        localStorage.setItem("workouts", JSON.stringify(data));
    }

}
