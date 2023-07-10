import React from 'react';
import '../style/MainBanner.css'
import banner from '../img/banner.png';

function MainBanner(){
    return(
        <>
            <div className='mainBaner'>
                <img className='banner' src={banner} alt="banner"/>
                <p className='text'>МЕЖДУНАРОДНЫЙ КОНКУРС КОМПЬЮТЕРНЫХ РАБОТ ДЛЯ ДЕТЕЙ, ЮНОШЕСТВА И СТУДЕНЧЕСКОЙ МОЛОДЕЖИ "ЦИФРОВОЙ ВЕТЕР"</p>
                <button className='becomeParticipant'>СТАТЬ УЧАСТНИКОМ</button>
            </div>
        </>
    )
}
export default MainBanner;