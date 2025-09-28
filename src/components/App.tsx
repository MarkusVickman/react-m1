import './App.css'
import Workout from './Workout';
import WorkoutTypes from "./WorkoutTypes-interface"
import { LocalStorageWorkouts } from './LocalStoredWorkouts.tsx';
import WorkoutInfo from './WorkoutInfo.tsx';
import { useState } from 'react'



function App() {

  //use state för input till beräkning av 1rm
  const [oneRm, setOneRm] = useState<number>(0);


  //Skapar ny instans av klassen LocalStorageWorkouts
  const localStorageWorkouts = new LocalStorageWorkouts();

  //useState lagrar in tre object arrayer i traningDays objectet. 
  let [trainingDays, setTrainingDays] = useState(localStorageWorkouts.trainingDays());

  //Destruerar objectet för att få ut tre object arrayer (undra om useState hanteringen borde varit här. Jag tar med mig det ;) )
  const { day1, day2, day3, day4, day5, day6, day7, day8 } = trainingDays;

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
      <div>
        <label>1 rep max</label>
        <input type="number" name="onerm" id="onerm" value={oneRm} onChange={(event) => setOneRm(Number(event.target.value))} />

        <p>{oneRm}</p>
        </div>
      <div className='big-container'>
        <h2>Vecka 1</h2>
        {day1.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <div className='big-container'>
        <h2>Vecka 2</h2>
        {day2.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <div className='big-container'>
        <h2>Vecka 3</h2>
        {day3.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
            <div className='big-container'>
        <h2>Vecka 4</h2>
        {day4.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <div className='big-container'>
        <h2>Vecka 5</h2>
        {day5.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <div className='big-container'>
        <h2>Vecka 6</h2>
        {day6.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
            <div className='big-container'>
        <h2>Vecka 7</h2>
        {day7.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>
      <div className='big-container'>
        <h2>Vecka 8</h2>
        {day8.map((workout: WorkoutTypes) => <Workout workout={workout} key={workout.id} />)}

      </div>

      <button className="button" onClick={resetAll}>Starta om träningsperiod</button>
      <WorkoutInfo />

    </>
  )
}

export default App
