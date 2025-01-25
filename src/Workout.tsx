import WorkoutTypes from "./WorkoutTypes-interface"
import './Workout.css'

function Workout({ workout }: { workout: WorkoutTypes }) {
    
  const completedStyle = { backgroundColor: "rgba(0, 164, 0, 0.3)" }
  const notCompletedStyle = { backgroundColor: "rgba(255, 0, 0, 0.4)" }

    return (<article className="workout-container" style={workout.isCompleted ? completedStyle : notCompletedStyle}>
      <h2>{ workout.name }</h2>
      <p><b>Antal Set: </b>{ workout.set }</p>
      <p><b>Antal Rep: </b>{ workout.rep }</p>
      <p><b>Utförd: </b>{workout.isCompleted ? "Bra jobbat!" : "Skärpning!"}</p>
    </article>
    )
  }

  export default Workout