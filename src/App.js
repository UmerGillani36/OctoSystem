import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/About';
import Solutions from './pages/Solutions/Solutions';
import SOHO from './pages/SOHO/SOHO';
import Partnership from './pages/Partnership/Partnership';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import logo from './logo-ppp.png'; // Import the logo SVG file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';
import Scroll from './components/Scroll';
import TwilioCallingApp from './components/TwilioCallingApp';


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLanguage = navigator.language.toLowerCase();
    const defaultLanguage = userLanguage.startsWith('pt') ? 'br' : 'en';
    i18n.changeLanguage(defaultLanguage);
  }, [i18n]);

  return (
    <Router>
      <div className=''>
        <Header logo={logo} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/solutions' element={<Solutions />} />
          <Route path='/soho' element={<SOHO />} />
          <Route path='/partnership' element={<Partnership />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/call' element={<TwilioCallingApp />} />
        </Routes>
        <Scroll/>
      </div>
    </Router>
  );
}

export default App;
