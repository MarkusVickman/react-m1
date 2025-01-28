import './App.css'
import Workout from './Workout';
import WorkoutTypes from "./WorkoutTypes-interface"
import { LocalStorageWorkouts } from './LocalStoredWorkouts.tsx';
import WorkoutInfo from './WorkoutInfo.tsx';
import { useState } from 'react'



function App() {

  //Skapar ny instans av klassen LocalStorageWorkouts
  const localStorageWorkouts = new LocalStorageWorkouts();

  //useState lagrar in tre object arrayer i traningDays objectet. 
  let [trainingDays, setTrainingDays] = useState(localStorageWorkouts.trainingDays());

  //Destruerar objectet för att få ut tre object arrayer (undra om useState hanteringen borde varit här. Jag tar med mig det ;) )
  const { day1, day2, day3 } = trainingDays;

  // En arrowfunktion som deklareras med en variabel
  const resetAll = () => {

    //Ny instans av klass
    const newWorkouts = new LocalStorageWorkouts();

    //Initierar metod för att resetta hela träningsveckan och ändrar värdet i State för trainingDays (kanske skulle day1, day2, day3 haft useState istället så kanske det hade fungerat bättre)
    newWorkouts.resetWeek();
    setTrainingDays(newWorkouts.trainingDays());

    //Min useState fungerar inte helt. Laddar inte om innehållet så laddar om sidan.
    window.location.reload();

    return
  }

  /*
  Returnerar utskrift till skärmen. Använder Interface från separat fil för att typsäkra. Skickar med props för att få tillbaka struktur.
  */
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
