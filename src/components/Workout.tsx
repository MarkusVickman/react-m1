import WorkoutTypes from "./WorkoutTypes-interface"
import './Workout.css'
import { useState } from 'react'
import { LocalStorageWorkouts } from './LocalStoredWorkouts.tsx';

function Workout({ workout }: { workout: WorkoutTypes }) {

  const completedStyle = { backgroundColor: "rgba(0, 164, 0, 0.3)" }
  const notCompletedStyle = { backgroundColor: "rgba(255, 0, 0, 0.4)" }

  const [isCompleted, setIsCompleted] = useState(workout.isCompleted);

  const changeIfCompleted = async (event: React.MouseEvent) => {
    const newWorkouts = new LocalStorageWorkouts();
    const target = event.currentTarget as HTMLDivElement;

    let updatedIsCompleted = await newWorkouts.changeIfCompleted(parseInt(target.id));
    setIsCompleted(updatedIsCompleted);
  }


  return (<article className="workout-container" style={isCompleted ? completedStyle : notCompletedStyle} id={(workout.id).toString()} onClick={changeIfCompleted}>
    <h2>{workout.name}</h2>
    <p><b>Antal Set: </b>{workout.set}</p>
    <p><b>Utförd: </b>{isCompleted ? "Bra jobbat!" : "Skärpning!"}</p>
  </article>
  )
}

export default Workout