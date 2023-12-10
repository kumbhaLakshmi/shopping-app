// import '../App.css';
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Home from './AppComponents/Main';
import Shop from './AppComponents/Shop';
import Contact from './AppComponents/Contact';
import Navigation from './Navigation';
import Header from './Header';

function Links() {
  return (
  <>  
  <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default Links;
