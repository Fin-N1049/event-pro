import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodOpinionPage from './screen/merchant/HomePage';
import ReviewPage from './screen/merchant/Review';
import axios from 'axios';



axios.defaults.baseURL = process.env.AXIOS_URL || 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FoodOpinionPage />} />
        <Route path="/reviews/:name" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
