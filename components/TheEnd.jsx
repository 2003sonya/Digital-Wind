import React from 'react';
import '../style/TheEnd.css';
import whiteVkLogo from '../img/whiteVkLogo.svg';

function TheEnd() {
    return(
        <>

            <div className='containerEnd'>

                    <div className='containerForm'>

                        <p className='textQuestion'>Остались вопросы? Напишите нам</p>
                        <form>
                            <p className='pFotField'><input type="text" name="userName" placeholder="Имя*" className='field'/></p>
                            <p className='pFotField'><input type="text" name="userTelephome" placeholder="Телефон"className='field' /></p>
                            <p className='pFotField'><input type="text" name="userEmail" placeholder="E-mail*"className='field' /></p>
                            <p className='pFotField'><input type="text" name="usertext" placeholder="Сообщение*" className='fieldText' /></p>

                            <button type="submit" className='buttonOrange'>Отправить</button> 
                        </form>
                    </div>

                    <div className='containerMap'>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Af627e1231f433fae1ce672cec266342efb3caaec24c8651061b0df28dc422895&amp;source=constructor" width="826" height="410" frameborder="0"></iframe>
                    </div>

            </div>

            <div className='containerLastEnd'>

                <div className='infaLast'>

                    <p className='telephomeLast'>Телефон: (8452) 99-87-34</p>
                    <p className='telephomeLast'>E-mail: digitalwind@sstu.ru</p>
                    <p className='telephomeLast'>© 1998-2022  Институт прикладных информационных технологий и коммуникаций </p>

                </div>

                <div className='logoLast'>
                    <img className='whiteVkLogo' src={whiteVkLogo} alt="whiteVkLogo"/>
                </div>
                
            </div>

        </>
    )
}
export default TheEnd;