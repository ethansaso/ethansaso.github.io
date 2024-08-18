import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Route exact path="/personal-site" element={<Home />} />
          <Route path="/personal-site/projects" element={<Projects />} />
          <Route path="/personal-site/photos" element={<Photos />} />
          <Route path="/personal-site/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
