import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage/homepage';
import CreateEventPage from './screens/createEvent/createEvent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/eventcreate' element={<CreateEventPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
