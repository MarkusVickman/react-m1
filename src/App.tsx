import './App.css'
import Workout from './Workout';
//import data from './assets/data.json'
import WorkoutTypes from "./WorkoutTypes-interface"
import { LocalStorageWorkouts } from './LocalStoredWorkouts.tsx';


  
function App() {

const localStorageWorkouts = new LocalStorageWorkouts();
const { day1, day2, day3 } = localStorageWorkouts.trainingDays();


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
    <div className="medium-container">
    <h2>Information</h2>
    <p>Här finns ditt nya träningsschema! klarmarkera tränade övningar och nollställ veckan när du är klar med alla tre pass. Sedan är det bara att börja om igen.</p>
    <p>Schemat är endast ett hållschema som inte innehåller specifika övningar. Schemat är tänkt att tränar med pyramid-set och relativt korta pass. Träningsveckan kan vara den längd utövaren önskar och behöver inte vara en vecka lång.</p>
    </div>
    </>
  )
}

export default App
