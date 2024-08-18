import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './layout/Navigation.js';
import Sidebar from './layout/Sidebar.js';
import Home from './pages/Home.js';
import Photos from './pages/Photos.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';
import './css/Main.scss';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
