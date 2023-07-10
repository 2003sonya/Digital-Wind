import React from 'react';
import { Link } from "react-router-dom";
import '../style/styleMenuPageNews.css'
import iconPerson from '../img/iconPerson.svg';
import iconPersonActive from '../img/iconPersonActive.svg';
import mainLogo from '../img/mainLogo.svg';
import rilexitLogo from '../img/rilexitLogo.svg';
import rilexitLogoActive from '../img/rilexitLogoActive.svg';
import vkLogo from '../img/vkLogo.svg';
import { useState } from 'react';
function MenuPageNews() {

    const [iconP, iconPActive] = useState(iconPerson);
    const [rilexitL, rilexitLActive] = useState(rilexitLogo);
    return (
        <>
            <header className='containerMPN'>

                <Link to='/'><div className='logoMPN'><img className='mainLogo' src={mainLogo} alt="maimLogo" /></div></Link>

                <div className='infoMPN'>

                    <div className='contactInformationMPN'>
                        <p className='telephoneMPN'>(8452) 99-87-34</p>
                        <a href=''><img className='vkLogoMPN' src={vkLogo} alt="maimLogo" /></a>
                        <p className='euMPN'>EU</p>
                        <img className='iconPerson' onMouseOut={() => iconPActive(iconPerson)} onMouseOver={() => iconPActive(iconPersonActive)} src={iconP} alt="iconPerson" />
                        <p className='ns'>Имя Фамилия</p>
                        <img className='rilexitLogo' onMouseOut={() => rilexitLActive(rilexitLogo)} onMouseOver={() => rilexitLActive(rilexitLogoActive)} src={rilexitL} alt="rilexitLogo" />
                    </div>

                    <nav className='linksMPN'>
                        <a href='' className='newMPN'>Новости</a>
                        <a href='' className='catalogMPN'>Каталог работ</a>
                        <a href='' className='informationMPN'>Информация</a>
                        <a href='' className='contactsMPN'>Контакты</a>
                        <a href='' className='masterClassesMPN'>Мастер-классы</a>
                        <a href='' className='organizerMPN'>Организаторы и партнёры</a>
                    </nav>

                </div>

            </header>
        </>
    );
}

export default MenuPageNews;