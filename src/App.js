import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/NewHomePage/HomePage';
import Footer from './components/Footer';
// import AboutPage from './components/AboutPage';
// import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<HomePage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
