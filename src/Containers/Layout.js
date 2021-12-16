import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Intro from '../Components/Intro';

const Layout = ({ children }) => {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setShowIntro(true)
    setTimeout(() => {
      setShowIntro(false)
    }, 2000);
  }, []);

  return (
    <>
      {showIntro ? <Intro /> : ''}
      <Header show={true} />
      {children}
      <Footer />
    </>
  )
};

export default Layout;