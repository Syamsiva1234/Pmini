import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from './pages/AboutUs';
// import Events from './pages/Events';
// import OurPatients from './pages/OurPatients';
import OurScience from './pages/OurScience';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import EventPage from './pages/EventPage';
import CardsRender from './Components/CardsRender';
import PatientDetails from './pages/PatientDetails';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CardsRender />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/OurPatients" element={<CardsRender />} />
          <Route path='/OurPatients/patientDetails/:id' element={<PatientDetails />} />
          <Route path="/OurScience" element={<OurScience />} />
          <Route path="/EventPage" element={<EventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
