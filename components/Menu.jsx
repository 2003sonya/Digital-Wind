import React from 'react';
import { Link } from "react-router-dom";
import '../style/Menu.css'
import mainLogo from '../img/mainLogo.svg';
import exitLogo from '../img/exitLogo.svg';
import vkLogo from '../img/vkLogo.svg';

function Menu(){
    return(
        <>
        <div className='container'>

        <Link to='/'><div className='logo'><img className='mainLogo' src={mainLogo} alt="maimLogo"/></div></Link>
            
            <div className='info'>
                
                <div className='contactInformation'>
                    <p className='telephone'>(8452) 99-87-34</p>
                    <a href=''><img className='vkLogo' src={vkLogo} alt="maimLogo"/></a>
                    <p className='eu'>EU</p>
                    <img className='exitLogo' src={exitLogo} alt="maimLogo"/>
                </div>

                <div className='links'>
                    <Link to='/news'>Новости</Link>
                    
                    <Link to='/catalogWork'>Каталог работ</Link>
                    <Link to='/information'>Информация</Link>
                    <a href='' className='contacts'>Контакты</a>
                    <Link to='/masterClasses'>Мастер-классы</Link>
                    <a href='' className='organizer'>Организаторы и партнёры</a>
                </div>

            </div>
           
        </div>
        </>
        
    )
}
export default Menu;