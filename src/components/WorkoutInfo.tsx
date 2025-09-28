import './WorkoutInfo.css'

//En komponent som enbart returnerar text
function WorkoutInfo() {

    return (

        <div className="medium-container">
        <h2>Information</h2>
        <p>Bänkpressprogram är framtaget av en av Sveriges bästa bänkpressare Marcus Hirvonen.</p>
        <p>Enligt programmet tränar man bänkpress två gånger i veckan i 8 veckor. I programmet utgår man från sitt 1RM, det vill säga den tyngsta vikt du i nuläget klarar av att lyfta en gång. </p>
        <p>Det går att så klart att träna kompletterande övningar om så önskas. Övningar för övriga kroppen kan med fördel vara grundövningar som knäböj, marklyft och skivstångsrodd som då tränas på andra dagar.</p>
        </div>    
  )
}

export default  WorkoutInfo
