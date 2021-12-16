import * as React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';
import { one, two, three, four, five, six, seven, MainTitle, onOff, logosTry } from '../assets';
import BrandLogo from '../Components/BrandLogo';

const Home = () => {
  return (
    <>
      <div className='brandZone'>
        <BrandLogo src={onOff} />
        <BrandLogo src={MainTitle} />
        <div className='logosTry'>
          <img src={logosTry} alt="logos try" />
        </div>
      </div>
      {/* <p className='instructive'>Sigue cada paso  y reza en familia</p> */}
      <div className='mainMenu'>
        <Link to='/stepone' className='menuOption'>
          <img src={one} alt="step one" />
        </Link>
        <Link to='/steptwo' className='menuOption'>
          <img src={two} alt="step two" />
        </Link>
        <Link to='/stepthree' className='menuOption'>
          <img src={three} alt="step three" />
        </Link>
        <Link to='/stepfour' className='menuOption'>
          <img src={four} alt="step four" />
        </Link>
        <Link to='/stepfive' className='menuOption'>
          <img src={five} alt="step five" />
        </Link>
        <Link to='/stepSix' className='menuOption'>
          <img src={six} alt="step six" />
        </Link>
        <Link to='/stepseven' className='menuOption'>
          <img src={seven} alt="step seven" />
        </Link>
      </div>
    </>
  )
};

export default Home;