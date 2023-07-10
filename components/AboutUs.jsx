import React from 'react';
import '../style/AboutUs.css'
import banner from '../img/banner.png';
function AboutUs() {
    return(
        <>
            <div className='containerAboutUs'>
                <div className='twentyOneYear'>
                    <div className='divTwentyOne'>
                        <p className='textTwentyOne'>21</p>
                    </div>
                    
                    <div className='divYear'>
                        <p className='textYear'>год</p>
                    </div>
                    
                </div>

                <div className='points'>
                    <p className='text01'>предоставляем школьникам и студентам возможность:</p>
                    <ul className='list'>
                        <li>развить навыки работы с современными информационными технологиями</li>
                        <li>раскрыть творческие способности, интеллектуальный потенциал</li>
                        <li>заявить о себе в мире профессиональных IT</li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
export default AboutUs;