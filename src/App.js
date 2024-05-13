import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import LoginPage from './components/logIn';
import UploadPage from './components/uploadFile';
import RegisterPage from './components/register';

const App = () => {
  return (
    <Router>
      <div>
        <Routes> 
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/upload" element={<UploadPage />} /> 
          <Route path="/" element={<LoginPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
