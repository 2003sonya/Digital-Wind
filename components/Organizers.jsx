import React from 'react';
import '../style/Organizers.css';
import mouse from '../img/mouse.svg';
import sstuLogo from '../img/sstuLogo.svg';
import inpitLogo from '../img/inpitLogo.svg';

function Organizers(){
    return(
        <>

        <div className='containerOrganizer'>

            <div className='lineOrganiz'></div>
            <h2 className='headingOrganiz'>ОРГАНИЗАТОРЫ</h2>
            <img className='mouse' src={mouse} alt="mouse"/>

        </div>

        <div className='containerImg'>

            <img className='sstuLogo' src={sstuLogo} alt="sstuLogo"/>
            <img className='inpitLogo' src={inpitLogo} alt="inpitLogo"/>

        </div>

        <a href='' className='moredetailed'>Подробнее</a>
        </>
    )
}
export default Organizers;