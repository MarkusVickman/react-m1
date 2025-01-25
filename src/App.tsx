import './App.css'
import Workout from './Workout';
import data from './assets/data.json'
import WorkoutTypes from "./WorkoutTypes-interface"

  
function App() {

  const workouts: WorkoutTypes[] = data;

    return (
    <>
    <div className='big-container'>
      {workouts.map((workout) => <Workout workout={workout} key={workout.id} />)}

    </div>
    </>
  )
}

export default App
