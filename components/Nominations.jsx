import React from 'react';
import '../style/Nominations.css'
import whiteFlashLogo from '../img/whiteFlashLogo.svg';
import dandelion1 from '../img/dandelion1.svg';
import dandelion2 from '../img/dandelion2.svg';
import dandelion3 from '../img/dandelion3.svg';
import thematicSite from '../img/thematicSite.svg';
import d2Graphics from '../img/d2Graphics.svg';
import d2Animation from '../img/d2Animation.svg';
import d3Graphics from '../img/d3Graphics.svg';
import computerGames from '../img/computerGames.svg';
import photoSketch from '../img/photoSketch.svg';


function Nominations() {
    return(
        <>
        <div className='naminMain'>

            <div className='headerNomination'>
                <div className='lineWhite'></div>
                <h2 className='textNomin'>НОМИНАЦИИ</h2>
                <img className='whiteFlashLogo' src={whiteFlashLogo} alt="whiteFlashLogo"/>
            </div>

            <div className='containerBlue'>

                <div className='one'>

                    <div className='img1'><img className='dandelion1' src={dandelion1} alt="dandelion1"/></div>
                    <div className='img2'><img className='dandelion2' src={dandelion2} alt="dandelion2"/></div>

                </div>

                <div className='two'>

                    <div className='imgthematicSite'>
                            <img className='thematicSite' src={thematicSite} alt="thematicSite"/>
                            <p className='textForImg'>Тематический сайт</p>
                    </div>

                    <div className='img2dGraphics'>
                            <img className='d2Graphics' src={d2Graphics} alt="d2Graphics"/>
                            <p className='textForImg'>Двумерная статичная графика</p>
                    </div>

                    <div className='imgd2Animation'>
                            <img className='d2Animation' src={d2Animation} alt="d2Animation"/>
                            <p className='textForImg'>Двумерная анимация</p>
                    </div>
    
                    <div className='imgd3Graphics'>
                            <img className='d3Graphics' src={d3Graphics} alt="d3Graphics"/>
                            <p className='textForImg'>Трехмерная статичная графика</p>
                    </div>

                    <div className='imgcomputerGames'>
                            <img className='computerGames' src={computerGames} alt="computerGames"/>
                            <p className='textForImg'>Компьютерные игры</p>
                    </div>

                    <div className='imgphotoSketch'>
                            <img className='photoSketch' src={photoSketch} alt="photoSketch"/>
                            <p className='textForImg'>Специальная номинация «Фотозарисовка”</p>
                    </div>
       
                </div>

                <div className='three'>

                        <div className='img0'><img className='dandelion2' src={dandelion2} alt="dandelion2"/></div>
                        <div className='img3'><img className='dandelion3' src={dandelion3} alt="dandelion3"/></div>

                </div>
                            
            </div> 

            <div className='linkOrange'>
                <a href='' className='textlink'>Перейти к положению</a>
            </div>   

        </div>    

            
        </>
    )
}
export default Nominations;