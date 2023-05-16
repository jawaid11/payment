import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Image from "./assetes/bg.png";
import Home from './components/home/Home';
import PaymentForm from './components/home/PaymentForm';
import { SubscriptionProvider } from './components/SubscriptionContext';
function App() {
  const backgroundStyles = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Ensure the background covers the entire viewport height
  };

  return (
    <div className="App" style={backgroundStyles}>
      <NavBar />
      <SubscriptionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
        </SubscriptionProvider>
    </div>
  );
}

export default App;






