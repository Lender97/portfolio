import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './navBar'
import Routing from './routing'
import Footer from './footer'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
      <>
            <NavBar/>
            <Routing />
            <Footer />
      </>
      </BrowserRouter>
  </React.StrictMode>,
)
