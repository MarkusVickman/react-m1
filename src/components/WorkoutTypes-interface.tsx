//Detta interface används på många ställen för att typsäkra att inlägg följer typer

interface WorkoutTypes {

    id: number;
    day: number;
    name: string;
    set: number;
    isCompleted: boolean;

  }

  export default WorkoutTypes