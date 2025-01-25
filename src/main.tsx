import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='page-container'>
      <div className="page-height-without-footer">
        <Header />
        <main>
          <App />
        </main>
      </div>
      <Footer />
    </div>
  </StrictMode>,
)
