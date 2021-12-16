import * as React from 'react';
import { sevenPage } from '../../assets';
import { Link } from 'react-router-dom';
import DayImgDate from '../../Components/DayImgDate';
import Header from '../../Components/Header';

const StepSeven = () => {
  return (
    <>
      <Header show={true} />
      <div className='steps'>
        <DayImgDate image={sevenPage} textImage='step seven' />
        <h2>Elige un villancico para cantar</h2>
        <div className='sings'>
          <Link to='/anton' id='green'>
            Anton Tiruliruliru
          </Link>
          <Link to='/tutaina' id='clearGreen'>
            Tutaina
          </Link>
          <Link to='/nanita' id='red'>
            La Nanita Nana
          </Link>
          <Link to='/campana' id='orange'>
            Campana sobre campana
          </Link>
          <Link to='/peces' id='brown'>
            Los peces en el río
          </Link>
        </div>
      </div>
    </>
  )
};

export default StepSeven;