import "../style/pageWork.css"
import flashLogo from "../img/flashLogo2.svg"
import img from "../img/work.svg"
import like from "../img/like.svg"
import { useContext } from "react"
import { WorkContext } from "../context/WorkContext"
import BlueDandelion2 from "../components/BlueDandelions2"
import BlueDandelion1 from "../components/BlueDandelion1"
import TheEnd from '../components/TheEnd';
import Menu from '../components/Menu';
import MainBanner from '../components/MainBanner';

function PageWork(){
    const {work} = useContext(WorkContext);
    // const obj = 
    // {
    //     id: 1, 
    //     img: "work", 
    //     title: "Змейка", 
    //     name: "Иван", 
    //     lastName: "Иванов", 
    //     nomination: "computerGames", 
    //     age: 10, 
    //     ageNomination: "до 12 лет", 
    //     like: 3
    // };

    return(
        <>       
    <div className="menu">
            <Menu/>
        </div>

        <div className='mainbanner'>
            <MainBanner/>
        </div>

        <div className="pageWork">
            
            <div className='containerHaed2'>
                <div className='lin'></div>
                <h2 className='headin1'>НАЗВАНИЕ РАБТЫ</h2>
                <img className='flashLogo02' src={flashLogo} alt="flashLogo"/>
            </div>
            <div className="flexWork">
                <BlueDandelion1/>
                    <div className="work">
                        <img src={img} className="posterWork"/>
                        <div className="deskription">
                            <div className="person">
                                <p className="title">Описание</p>
                                <p>{work.name + " " + work.lastName}</p>
                                <p>{work.age + " лет"}</p>
                            </div>
                            <div className="like">
                                <p>{work.like}</p>
                                <img src={like}/>
                            </div>
                        </div>
                        <div className="comment">
                            <p>КОММЕНТАРИИ</p>
                            <p className="noneComments">Комментариев пока нет</p>
                        </div>
                    </div>
                <BlueDandelion2/>
            </div>
                
        </div>

        <div className='theEnd'>
          <TheEnd/>
      </div>
       </>  
    )
}
export default PageWork;