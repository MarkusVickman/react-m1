import WorkoutTypes from "./WorkoutTypes-interface"


function Workout({ workout }: { workout: WorkoutTypes }) {
    


    return (<article className="">
      <li><b>Övning: </b>{ workout.name }</li>;
      <li><b>Antal Set: </b>{ workout.set }</li>;
      <li><b>Antal Rep: </b>{ workout.rep }</li>;
      <li><b>Utförd: </b>{ workout.isCompleted }</li>;
    </article>
    )
  }

  export default Workout