import './WorkoutInfo.css'

//En komponent som enbart returnerar text
function WorkoutInfo() {

    return (

        <div className="medium-container">
        <h2>Information</h2>
        <p>Här finns ditt nya träningsschema! klarmarkera tränade övningar och nollställ veckan när du är klar med alla tre pass. Sedan är det bara att börja om igen.</p>
        <p>Schemat är endast ett hållschema som inte innehåller specifika övningar. Schemat är tänkt att tränar med pyramid-set och relativt korta pass. Träningsveckan kan vara den längd utövaren önskar och behöver inte vara en vecka lång.</p>
        </div>    
  )
}

export default  WorkoutInfo
