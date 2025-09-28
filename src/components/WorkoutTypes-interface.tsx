//Detta interface används på många ställen för att typsäkra att inlägg följer typer

interface WorkoutTypes {

    id: number;
    day: number;
    name: string;
    weight: number;
    set: number;
    rep: number;
    isCompleted: boolean;

  }

  export default WorkoutTypes
