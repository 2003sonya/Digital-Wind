import React from 'react';
import '../style/Partners.css'
import blueDandelion1 from '../img/blueDandelion1.svg';
import sibintekLogo from '../img/sibintekLogo.svg';
import neoflexLogo from '../img/neoflexLogo.svg';
import netcrackerLogo from '../img/netcrackerLogo.svg';
import sslLogo from '../img/sslLogo.svg';
import epamLogo from '../img/epamLogo.svg';
import museumLogo from '../img/museumLogo.svg';
import blueDandelion2 from '../img/blueDandelion2.svg';


function Partners() {
    return(
        <>

        <div className='containerHaed'>

            <div className='lineNews'></div>
            <h2 className='headingNews'>ПАРТНЕРЫ</h2>
            <div className='lineNews2'></div>

        </div>


        <div className='containerPartner'>

                <div className='picture'>

                    <div className='picture1'><img className='blueDandelion1' src={blueDandelion1} alt="blueDandelion1"/></div>

                </div>

                <div className='pictureAll'>

                    <div className='sibintek'>
                            <img className='sibintekLogo' src={sibintekLogo} alt="sibintekLogo"/>
                    </div>

                    <div className='neoflex'>
                            <img className='neoflexLogo' src={neoflexLogo} alt="neoflexLogo"/>
                    </div>

                    <div className='netcracker'>
                            <img className='netcrackerLogo' src={netcrackerLogo} alt="netcrackerLogo"/>
                    </div>
    
                    <div className='ssl'>
                            <img className='sslLogo' src={sslLogo} alt="sslLogo"/>
                    </div>

                    <div className='epam'>
                            <img className='epamLogo' src={epamLogo} alt="epamLogo"/>
                    </div>

                    <div className='museum'>
                            <img className='museumLogo' src={museumLogo} alt="museumLogo"/>
                    </div>
       
                </div>

                <div className='picture3'>

                        <div className='picture2'><img className='blueDandelion2' src={blueDandelion2} alt="blueDandelion2"/></div>

                </div>
               
            </div> 
            
            <a href='' className='moredetailed'>Подробнее</a>
        </>
    )
}
export default Partners;