import WorkoutTypes from "./WorkoutTypes-interface"
import './Workout.css'
import { useState } from 'react'
import { LocalStorageWorkouts } from './LocalStoredWorkouts.tsx';

//Child som tar emot props enligt interface WorkoutTypes
function Workout({ workout }: { workout: WorkoutTypes }) {

  //För att ändra stil beroende på klar eller ej. 
  const completedStyle = { backgroundColor: "rgba(0, 164, 0, 0.3)" }
  const notCompletedStyle = { backgroundColor: "rgba(255, 0, 0, 0.4)" }

  //State för att kunna ändra stil och text dynamiskt
  const [isCompleted, setIsCompleted] = useState(workout.isCompleted);

  //Vid klick ändras stil och text
  const changeIfCompleted = async (event: React.MouseEvent) => {
    const newWorkouts = new LocalStorageWorkouts();
    const target = event.currentTarget as HTMLDivElement;

    //Metoden i klassen ändrar vilken data som lagras i localstorage och efter ändras state beroende på retur är true eller false 
    let updatedIsCompleted = await newWorkouts.changeIfCompleted(parseInt(target.id));
    setIsCompleted(updatedIsCompleted);
  }

  //Tar emot props och skriver ut värden på rätt plats med Vilkor för att bestäma stil och text som skrivs ut.
  // Kan ändra om klar eller ej med funktionen changeIfCompleted och dess id
  return (<article className="workout-container" style={isCompleted ? completedStyle : notCompletedStyle} id={(workout.id).toString()} onClick={changeIfCompleted}>
    <h2>{workout.name}</h2>
    <p><b>Antal Set: </b>{workout.set}</p>
    <p><b>Antal Rep: </b>{workout.rep}</p>
    <p><b>Utförd: </b>{isCompleted ? "Bra jobbat!" : "Skärpning!"}</p>
  </article>
  )
}

export default Workout
