import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import Nav from './components/Nav.jsx'
import Hero from "./components/Hero.jsx";
import BackgroundComponent from './components/Background.jsx'
import Services from './components/Services.jsx'
import AboutUsSection from './components/AboutUs.jsx'
import ExpandableDiv from './SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <BackgroundComponent />
    <Hero />
    <Services />
    {/* <AboutUsSection/> */}
    {/* <ExpandableDiv></ExpandableDiv> */}
    <App />
   
   
  </React.StrictMode>,
)
