import React from 'react';
import "./App.css";
import Dashboard from './pages/dashboard';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
        <Header />
        <Dashboard />
        <Footer />
    </>
  )
}

export default App