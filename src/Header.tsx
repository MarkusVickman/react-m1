import './Header.css'
import banner from './assets/workout-banner.jpg'

function Header() {

    return (
        <header>
                        <h1>Min Träningsvecka</h1>
                        <div className='banner'><img src={ banner } alt="Kille som tränar i soluppgången." /></div>
        </header>
    )
}

export default Header
