import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

//Huvudvyn jag har lagt till lite taggar och komponenter för att de ska visas på rätt plats.
//Header får sin H1-titel som props
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='page-container'>
      <div className="page-height-without-footer">
        <Header title={"Min Träningsvecka"} />
        <main>
          <App />
        </main>
      </div>
      <Footer />
    </div>
  </StrictMode>,
)

