import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');   
 
  };

  return (
    <>
      <Header />
      <div>Home</div>
      <button onClick={handleButtonClick}>Login Page</button>
      <Footer />
    </>
  );
}