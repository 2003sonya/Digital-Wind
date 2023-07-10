import flashLogo from "../img/flashLogo2.svg"
import dandelion from "../img/blueDandelion2.svg"
import "../style/Information.css"
import TheEnd from '../components/TheEnd';
import Menu from '../components/Menu';
import MainBanner from '../components/MainBanner';
import { Link } from "react-router-dom";

function Information(){
    return(

<>       
    <div className="menu">
            <Menu/>
        </div>

        <div className='mainbanner'>
            <MainBanner/>
        </div>

        <div className="information">
            <div className="headerInformation">
                <hr></hr>
                <p>ИРФОРМАЦИЯ</p>
                <img src={flashLogo}/>
            </div>
            <div className="flexInformation">
                <div className="left"></div>
                <div className="center">
                    <a href="">Положение Цифровой ветер 2022.pdf</a>
                    <a href="">Результаты Цифровой ветер 2022.pdf</a>
                </div>
                <div className="right">
                    <img src={dandelion}/>
                </div>
            </div>
        </div>

        <div className='theEnd'>
          <TheEnd/>
      </div>
       </> 
    )
}

export default Information;