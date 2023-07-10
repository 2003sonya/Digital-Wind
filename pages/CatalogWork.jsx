import flashLogo from "../img/flashLogo2.svg"
import "../style/CatalogWork.css"
import { useState } from "react";
import FilterNomination from "../components/FilterNomination";
import FilterAge from "../components/FilterAge";
import ListWork from "../components/ListWork";
import BlueDandelion2 from "../components/BlueDandelions2";
import TheEnd from '../components/TheEnd';
import Menu from '../components/Menu';
import MainBanner from '../components/MainBanner';

function CatalogWork(){
    const [nomination, setNomination1] = useState("all");
    const [age, setAge1] = useState("Все возраста");
    const [page, setPage] = useState(1);

    function setAge(value){
        setAge1(value);
        setPage(1);
    }

    function setNomination(value){
        setNomination1(value);
        setPage(1);
    }

    const arrWork = [
        {id: 1, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "computerGames", age: 10, ageNomination: "до 12 лет", like: 3},
        {id: 2, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "thematicSite", age: 12, ageNomination: "до 12 лет", like: 3},
        {id: 3, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "2dAnimation", age: 14, ageNomination: "13-17 лет", like: 3},
        {id: 4, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "2dGraphics", age: 16, ageNomination: "13-17 лет", like: 3},
        {id: 5, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "photoSketch", age: 18, ageNomination: "18-25 лет", like: 3},
        {id: 6, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "computerGames", age: 20, ageNomination: "18-25 лет", like: 3},
        {id: 7, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "3dGraphics", age: 11, ageNomination: "до 12 лет", like: 3},
        {id: 8, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "photoSketch", age: 13, ageNomination: "13-17 лет", like: 3},
        {id: 9, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "dataScience", age: 15, ageNomination: "13-17 лет", like: 3},
        {id: 10, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "2dGraphics", age: 17, ageNomination: "13-17 лет", like: 3},
        {id: 11, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "dataScience", age: 19, ageNomination: "18-25 лет", like: 3},
        {id: 12, img: "work", title: "Змейка", name: "Иван", lastName: "Иванов", nomination: "dataScience", age: 19, ageNomination: "18-25 лет", like: 3}
    ]
    /* номинации: 
            thematicSite
            2dAnimation
            2dGraphics
            3dGraphics
            computerGames
            dataScience
            photoSketch
    */

    return(
<>       
    <div className="menu">
            <Menu/>
        </div>

        <div className='mainbanner'>
            <MainBanner/>
        </div>

       <div className="catalogWork">
            

            <div className='containerHaed2'>
                <div className='lin'></div>
                <h2 className='headin1'>КАТАЛОГ РАБОТ</h2>
                <img className='flashLogo22' src={flashLogo} alt="flashLogo"/>
            </div>


            <div className="flexWork">
                <div className="left"/>
                <div className="center">
                    <FilterNomination nomination={nomination} setNomination={setNomination}/>
                    <FilterAge age={age} setAge={setAge}/>
                    <ListWork page={page} setPage={setPage} list = {arrWork
                            .filter(w => (w.nomination == nomination || nomination == "all"))
                            .filter(w => (w.ageNomination == age || age == "Все возраста"))
                            .slice(9*(page-1), 9*(page))
                        }/>
                </div>
                <div className="right">
                    <BlueDandelion2/>
                </div>
            </div>
       </div>

       <div className='theEnd'>
          <TheEnd/>
      </div>
       </>       
    )
}

export default CatalogWork;