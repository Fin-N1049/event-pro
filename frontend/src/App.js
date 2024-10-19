import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import HomePage from './screens/HomePage/homepage';
import CreateEventPage from './screens/createEvent/createEvent';
import FoodOpinionPage from './screens/merchant/HomePage';
import ReviewPage from './screens/merchant/Review';
import logo from './logo.svg';
import './App.css';
import TeamListing from './screens/team_listing/team_listing.jsx';

// Set the base URL for Axios
axios.defaults.baseURL = process.env.AXIOS_URL || 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eventcreate" element={<CreateEventPage />} />
        <Route path="/opinion" element={<FoodOpinionPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
