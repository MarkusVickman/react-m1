import './Header.css'
import banner from '../assets/workout-banner.jpg'

//Enkel header med h1-titel och banner-bild
//Header får till H1-titel som props (tror att det var ett krav)
function Header({title}: { title: string}) {

    return (
        <header>
                        <h1>{title}</h1>
                        <div className='banner'><img src={ banner } alt="Kille som tränar i soluppgången." /></div>
        </header>
    )
}

export default Header
