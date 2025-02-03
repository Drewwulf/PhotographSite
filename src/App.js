import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar'; // Added Navbar import
import Footer from './components/Footer'; // Added Footer import
import './App.css'; // Make sure to import your global styles

function App() {
  return (
    <Router>
      <Navbar /> {/* Added Navbar to be present on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer /> {/* Added Footer to be present on all pages */}
    </Router>
  );
}

export default App;
