import React from 'react';
import '../style/BanerRegionalStage.css'
import littleDandelions1 from '../img/littleDandelions1.svg';
import banner3 from '../img/banner3.png';


function BanerRegionalStage() {
    return(
        <>
        <div className='banerOrange'>

            <p className='textOnBaner'>Международный конкурс компьютерных работ<br/> для детей,юношества и студенческой молодежи "Цифровой ветер"</p>
            <div className='photoBanner3'><img className='banner3' src={banner3} alt="banner3"/></div>
            <div className='blueText'>
                <p className='textOnblueDiv'>21 год предоставляем школьникам и студентам возможность развить навыки работы с современными информационными<br/>технологиями,
                <br/> раскрыть творческие способности, интеллектуальный потенциал  и заявить о себе в мире профессиональных IT</p>
            </div>
            <p className='deadlines1'>Приём работ до 17 апреля 2022 г.</p>
            <p className='deadlinesA2'>Возраст участников: от 7 до 25 лет</p>
            <button className='butRegistr'>Регистрация</button>
        </div>
        
        </>
    )
}

export default BanerRegionalStage