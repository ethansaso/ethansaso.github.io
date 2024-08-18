import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './layout/Navigation.js';
import Sidebar from './layout/Sidebar.js';
import Home from './pages/Home.js';
import Photos from './pages/Photos.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';
import './css/Main.scss';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const path = window.location.hash.substring(1); // Extract the path from the hash

    if (path && path !== '/') {
      navigate(path);
    }
  }, [navigate]);

  return (
    <div>
      <Navigation />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  );
}

export default AppWrapper;
