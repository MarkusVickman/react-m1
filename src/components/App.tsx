import './App.css'
import Workout from './Workout';
//import data from './assets/data.json'
import WorkoutTypes from "./WorkoutTypes-interface"
import { LocalStorageWorkouts } from './LocalStoredWorkouts.tsx';
import WorkoutInfo from './WorkoutInfo.tsx';
import { useState } from 'react'



function App() {

  const localStorageWorkouts = new LocalStorageWorkouts();

  //const [day1, day2, day3, setIsCompleted] = useState(localStorageWorkouts.trainingDays());

  let [trainingDays, setTrainingDays] = useState(localStorageWorkouts.trainingDays());

  const { day1, day2, day3 } = trainingDays;

  const resetAll = () => {

    const newWorkouts = new LocalStorageWorkouts();

    newWorkouts.resetWeek();
    setTrainingDays(newWorkouts.trainingDays());

    //Min useState fungerar inte helt. Laddar inte om innehållet så laddar om sidan.
    window.location.reload();

    return

  }


  // Om du uppdaterar state med setTrainingDays
  //setTrainingDays(newTrainingDays);



  //const { day1, day2, day3 } = localStorageWorkouts.trainingDays();


  return (
    <>
      <div className='big-container'>
        <h2>Träningsdag 1</h2>
        {day1.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <div className='big-container'>
        <h2>Träningsdag 2</h2>
        {day2.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <div className='big-container'>
        <h2>Träningsdag 3</h2>
        {day3.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <button className="button" onClick={resetAll}>Vecka klar</button>
      <WorkoutInfo />

    </>
  )
}

export default App
